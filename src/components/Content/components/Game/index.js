import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Card from './components/Card';
import Button from 'components/Forms/Button';
import { addRecord, sortRecord } from 'redux_main/actions/records';
import { setHomeWindow } from 'redux_main/actions/windows';
import { useDispatch, useSelector } from 'react-redux';
import ModalWindow from './components/ModalWindow';

const Game = () => {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [timer, setTimer] = useState({ seconds: 0, minutes: 0 });
    const [timerIsActive, setTimerIsActive] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const dispatch = useDispatch();
    const cardImages = useSelector(state => state.cards.cardImages);
    const currentPlayer = useSelector(state => state.players.currentPlayer);

    useEffect(() => {
        shuffleCards()
    }, [])

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, isMatched: true}
                        }
                        else {
                            return card
                        }
                    })
                })
                resetTurn()
            }
            else {
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])

    useEffect(() => {
        const isAllMatched = cards.length && cards.every(card => card.isMatched === true)
        if(isAllMatched) {
            setTimerIsActive(false)
            dispatch(addRecord({...timer, currentPlayer}))
            dispatch(sortRecord())
            setTimeout(() => setIsShow(true), 1000)
        }
    }, [cards])

    useEffect(() => {
        if(timerIsActive) {
            const interval = setInterval(() => {
                setTimer( timer => ({
                seconds: timer.seconds === 59 ? 0 : timer.seconds + 1,
                minutes: timer.seconds === 59 ? timer.minutes + 1 : timer.minutes
                }))
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [timerIsActive])

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));
        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
        setTimer({ seconds: 0, minutes: 0 })
        setTimerIsActive(true)
    }

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    const onClickHomeHandler = () => {
        dispatch(setHomeWindow())
    }

    const handleModalClose = () => {
        setIsShow(false)
        onClickHomeHandler()
    }

    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
            <Button onClick={shuffleCards}>New game</Button>
            <Button onClick={onClickHomeHandler}>Back</Button>
            </div>
            <div className={styles.cardGrid}>
                {cards.map(card => (
                    <Card 
                        key={card.id} 
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.isMatched}
                        disabled={disabled}
                    />
                ))}
            </div>
            <div className={styles.score}>
                <p className={styles.scoreItem}>Turns: {turns}</p>
                <p className={styles.scoreItem}>Time: {timer.minutes} : {timer.seconds}</p>
            </div>
            <ModalWindow isShow={isShow} handleModalClose={handleModalClose} timer={timer}/>
        </div>
    )
}

export default Game;