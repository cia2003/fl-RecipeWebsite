
import './About.css'
import aboutData from "../../data/aboutData"
import featureData from '../../data/featureData'
import { LuLamp, LuLightbulb } from "react-icons/lu"
import PCImage from "../../assets/images/aboutPage/pc-code.png"

export function About() {
    return (
        <article className="about-page">
            <section className="about-section">
                <div className="about-section__header">
                    <div className="about-section__header__text-container">
                        <h1 className="text-2xl-title">
                            About This Project
                        </h1>    
                        <p className="text-medium-body">
                            This website is part of my <span className="text--color-main text-bold">internship assignment</span> that
                            explores how <span className="text--color-main text-bold">AI</span> is used in the development process.

                            <br /> <br />
                            The goal of this project is to learn, experiment, and understand how AI tools
                            can assist in building modern web applications more efficiently
                        </p>                    
                    </div>
                    <div className='feature-container'>
                        <h2 className='text-large-body text-bold'>What you can do?</h2>
                        <div className='feature-list'>
                            {
                                featureData.map(
                                    (data) => {
                                        return (
                                            <div key={data.description} className='feature-item'>
                                                <data.icon className='feature-icon' size={24} />
                                                <p className='text-base-body'>{data.description}</p>
                                            </div>                                            
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    <div className='about-section__header__img-container'>
                        <img src={PCImage} alt="ai-generated-pc-image" className='about-section__header__img' />
                    </div>
                </div>

                <div className="about-section__card-list">
                    {
                        aboutData.map((data) => {
                            return (
                                <div key={data.title} className='about-section__card-item-container'>
                                    <div className="about-section__card-item">
                                        <data.icon size={36} className='about-section__card-icon' />
                                        <div className="about-section__card-item__text-container">
                                            <h2 className="text-medium-title">{data.title}</h2>
                                            <p className="text-base-body">{data.description}</p>
                                        </div>
                                    </div>                                    
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </article>
    )
}