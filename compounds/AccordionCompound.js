import AccordionWrapper from "../components/Accordion/AccordionWrapper"
import AccordionTitle from "../components/Accordion/AccordionTitle"
import AccordionItem from "../components/Accordion/AccordionItem"
import FeatureSubtitle from "../components/Feature/FeatureSubtitle"
import OptFormWrapper from "../components/OptForm/OptFormWrapper"
import OptFormEmail from "../components/OptForm/OptFormEmail"
import OptFormBtn from "../components/OptForm/OptFormBtn"
import Separator from "../components/Jumbo/Separator"

export default function AccordionCompound() {
  return (
    <>
      <AccordionWrapper>
        <AccordionTitle />

        <AccordionItem></AccordionItem>

        <FeatureSubtitle />
        <OptFormWrapper>
          <OptFormEmail />
          <OptFormBtn />
        </OptFormWrapper>
      </AccordionWrapper>

      <Separator />
    </>
  )
}





/*
import React from 'react';
import { useState } from 'react';
import AccordionBody from '../components/Accordion/AccordionBody';
import AccordionHeader from '../components/Accordion/AccordionHeader';
import AccordionItem from '../components/Accordion/AccordionItem';
import AccordionTitle from '../components/Accordion/AccordionTitle';
import AccordionWrapper from '../components/Accordion/AccordionWrapper';
import OptFormWrapper from '../components/OptForm/OptFormWrapper'
import OptFormText from '../components/OptForm/OptFormText'
import OptFormEmail from '../components/OptForm/OptFormEmail'
import OptFormBtn from '../components/OptForm/OptFormBtn';

function AccordionCompound() {
    const [FAQState1, setFAQState1] = useState('close');
    const [FAQState2, setFAQState2] = useState('close');
    const [FAQState3, setFAQState3] = useState('close');
    const [FAQState4, setFAQState4] = useState('close');
    const [FAQState5, setFAQState5] = useState('close');

    function handleClick1() {
        if (FAQState1 === "close") {
            setFAQState1("open");
        } else if (FAQState1 === "open") {
            setFAQState1("close");
        }
    };

    function handleClick2() {
        if (FAQState2 === "close") {
            setFAQState2("open");
        } else if (FAQState2 === "open") {
            setFAQState2("close");
        }
    };

    function handleClick3() {
        if (FAQState3 === "close") {
            setFAQState3("open");
        } else if (FAQState3 === "open") {
            setFAQState3("close");
        }
    };

    function handleClick4() {
        if (FAQState4 === "close") {
            setFAQState4("open");
        } else if (FAQState4 === "open") {
            setFAQState4("close");
        }
    };

    function handleClick5() {
        if (FAQState5 === "close") {
            setFAQState5("open");
        } else if (FAQState5 === "open") {
            setFAQState5("close");
        }
    };

    return (
        <AccordionWrapper>
            <AccordionTitle />
            <AccordionItem>
                <div onClick={handleClick1} className="acc-header">
                    What is Netflix?
                    {FAQState1 === 'open' ? (
                        <img src="./images/icons/close-slim.png" />
                    ) : <img src="./images/icons/add.png" />
                    }
                </div>

                {FAQState1 === 'open' ? (
                    <div className="acc-body">
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                        movies, anime, documentaries, and more on thousands of internet-connected devices.
                        <br /> <br />
                        You can watch as much as you want, whenever you want without a single commercial –
                        all for one low monthly price. There's always something new to discover and new TV
                        shows and movies are added every week!
                    </div>
                ) : null
                }
            </AccordionItem>

            <AccordionItem>
                <div onClick={handleClick2} className="acc-header">
                    How much does Netflix coast?
                    {FAQState2 === 'open' ? (
                        <img src="./images/icons/close-slim.png" />
                    ) : <img src="./images/icons/add.png" />
                    }
                </div>

                {FAQState2 === 'open' ? (
                    <div className="acc-body">
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                        movies, anime, documentaries, and more on thousands of internet-connected devices.
                        <br /> <br />
                        You can watch as much as you want, whenever you want without a single commercial –
                        all for one low monthly price. There's always something new to discover and new TV
                        shows and movies are added every week!
                    </div>
                ) : null
                }
            </AccordionItem>

            <AccordionItem>
                <div onClick={handleClick3} className="acc-header">
                    Where can I watch?
                    {FAQState3 === 'open' ? (
                        <img src="./images/icons/close-slim.png" />
                    ) : <img src="./images/icons/add.png" />
                    }
                </div>

                {FAQState3 === 'open' ? (
                    <div className="acc-body">
                        Watch anywhere, anytime, on an unlimited number of devices.
                        Sign in with your Netflix account to watch instantly on the web at netflix.com
                        from your personal computer or on any internet-connected device that offers the
                        Netflix app, including smart TVs, smartphones, tablets, streaming media players and
                        game consoles. <br /> <br />You can also download your favorite shows with the iOS,
                        Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection.
                        Take Netflix with you anywhere.
                    </div>
                ) : null
                }
            </AccordionItem>

            <AccordionItem>
                <div onClick={handleClick4} className="acc-header">
                    How do I cancel?
                    {FAQState4 === 'open' ? (
                        <img src="./images/icons/close-slim.png" />
                    ) : <img src="./images/icons/add.png" />
                    }
                </div>

                {FAQState4 === 'open' ? (
                    <div className="acc-body">
                        Netflix is flexible. There are no pesky contracts and no commitments.
                        You can easily cancel your account online in two clicks.
                        There are no cancellation fees – start or stop your account anytime.
                    </div>
                ) : null
                }
            </AccordionItem>

            <AccordionItem>
                <div onClick={handleClick5} className="acc-header">
                    What can I watch on Netflix?
                    {FAQState5 === 'open' ? (
                        <img src="./images/icons/close-slim.png" />
                    ) : <img src="./images/icons/add.png" />
                    }
                </div>

                {FAQState5 === 'open' ? (
                    <div className="acc-body">
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime,
                        award-winning Netflix originals,
                        and more. Watch as much as you want, anytime you want.
                    </div>
                ) : null
                }
            </AccordionItem>

        </AccordionWrapper>


    )
}

export default AccordionCompound;*/
