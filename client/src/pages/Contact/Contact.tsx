
import './Contact.css'
import contactData from "../../data/contactData"
import forWhomData from '../../data/forWhomData'
import LetsConnectImage from "../../assets/images/contactPage/lets-connect.png"

export function Contact() {
    return (
        <article className="contact-page">
            <section className="contact-section">
                <div className="contact-section__header">
                    <div className="contact-section__header__text-container">
                        <h1 className="text-2xl-title">
                            Let's Connect!
                        </h1>    
                        <p className="text-medium-body">
                            I'm open to opportunities, feedback, and suggestions. 
                            If you're interested in recruiting me or found something
                            that could be improved in this application, feel free to 
                            reach out!
                        </p>                    
                    </div>
                    <div className='for-whom-container'>
                        <div className='for-whom-list'>
                            {
                                forWhomData.map(
                                    (data) => {
                                        return (
                                            <div className='for-whom-item'>
                                                <div className='for-whom-item__text-container'>
                                                    <data.icon className='for-whom-icon' size={30} />
                                                    <h2 className='text-medium-title'>{data.title}</h2>
                                                </div>
                                                <p className='text-base-body'>{data.description}</p> 
                                                
                                            </div>                                            
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    <div className='contact-section__header__img-container'>
                        <img src={LetsConnectImage} alt="ai-generated-pc-image" className='contact-section__header__img' />
                    </div>
                </div>

                <div className='reach-out-container'>
                    <h2 className='text-large-body text-bold'>React out</h2>
                    <div className="contact-section__card-list">
                        {
                            contactData.map((data) => {
                                return (
                                    <div className='contact-section__card-item-container'>
                                        <div className="contact-section__card-item">
                                            <data.icon size={36} className='contact-section__card-icon' />
                                            <div className="contact-section__card-item__text-container">
                                                <p className="text-base-body">{data.contact}</p>
                                            </div>
                                        </div>                                  
                                    </div>
                                )
                            })
                        }
                    </div>                    
                </div>

            </section>
        </article>
    )
}