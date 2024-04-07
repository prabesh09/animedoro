import { useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const Quotes = () => {
    const [quote, setQuote] = useState(null)
    const [quoteHistory, setQuoteHistory] = useLocalStorage('quoteHistory', [])

    useEffect(() => {
        fetchQuote()
    }, [])

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://animechan.xyz/api/random')
            const data = await response.json()
            setQuote(data)
            updateQuoteHistory(data)
        } catch (error) {
            console.error('Error fetching quote:', error)
            if (quoteHistory.length > 0) {
                const randomIndex = Math.floor(Math.random() * quoteHistory.length)
                setQuote(quoteHistory[randomIndex])
            }
        }
    }

    const updateQuoteHistory = (quoteData) => {
        let quotes = [...quoteHistory, quoteData]
        if (quotes.length > 100) {
            quotes.shift()
        }
        setQuoteHistory(quotes)
    }

    return (
        <div className='text-sm text-center'>
            {
                quote ? (
                    <>
                        <p>{quote.quote}</p>
                        <p><strong>-</strong> {quote.character}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    )
}

export default Quotes
