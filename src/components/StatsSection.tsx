import styled from 'styled-components';


const StatsSection = function() {

    return (
        <Section>
            <div className='center-container'>
                <div className='stat-box'>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor" 
                        viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><circle cx="92" cy="128" r="16"></circle><circle cx="164" cy="128" r="16"></circle><path d="M154.5,168a47.9,47.9,0,0,1-53,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path><path d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,16,16,16.7,16.7,0,0,0,8-2.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path>
                    </svg>

                    <span className='span-bold'>50+</span>
                    <span className='span-regular'>გამოცდილების წლები</span>
                </div>
                <div className='stat-box'>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor" 
                        viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><circle cx="92" cy="128" r="16"></circle><circle cx="164" cy="128" r="16"></circle><path d="M154.5,168a47.9,47.9,0,0,1-53,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path><path d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,16,16,16.7,16.7,0,0,0,8-2.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path>
                    </svg>
                    <span className='span-bold'>50+</span>
                    <span className='span-regular'>გამოცდილების წლები</span>
                </div>
                <div className='stat-box'>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor" 
                        viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><circle cx="92" cy="128" r="16"></circle><circle cx="164" cy="128" r="16"></circle><path d="M154.5,168a47.9,47.9,0,0,1-53,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path><path d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,16,16,16.7,16.7,0,0,0,8-2.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path>
                    </svg>
                    <span className='span-bold'>50+</span>
                    <span className='span-regular'>გამოცდილების წლები</span>
                </div>
                <div className='stat-box'>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor" 
                        viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><circle cx="92" cy="128" r="16"></circle><circle cx="164" cy="128" r="16"></circle><path d="M154.5,168a47.9,47.9,0,0,1-53,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path><path d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,16,16,16.7,16.7,0,0,0,8-2.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path>
                    </svg>
                    <span className='span-bold'>50+</span>
                    <span className='span-regular'>გამოცდილების წლები</span>
                </div>
            </div>
        </Section>
    )
}

export default StatsSection;

const Section = styled.section`
background: var(--Background-Lightblue);
padding: 2rem 0 2rem 0;

    .center-container { 
        width: 80%;
        margin: 0 auto;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(4, 1fr);
    }

    .stat-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--Hover-Lightblue);
        padding: 2rem;
        border-radius: 0.3rem;
        transition: all 0.25s;
    }

    .stat-box:hover {
        transform: translateY(-3px);
        box-shadow: 0px 10px 14px -2px rgba(156,155,156,0.9);
        -webkit-box-shadow: 0px 10px 14px -2px rgba(156,155,156,0.9);
        -moz-box-shadow: 0px 10px 14px -2px rgba(156,155,156,0.9);
    }

    .svg {
        color: var(--Catalina-Blue);
        width: 6rem;
        height: 6rem;
    }

    .span-bold {
        font-size: 1.5rem;
        color: var(--Catalina-Blue);
        font-weight: 700;

    }

    .span-regular {
        font-size: 1.2rem;
        color: var(--Catalina-Blue);
    }

            // Below 1050px
            @media(max-width: 65.625em) {
                .center-container {
                    width: 90%;
                }
            }

            // Below 950px
                        @media(max-width: 59.375em) {
                            .center-container {
                                grid-template-columns: repeat(2, 1fr);
                                width: 80%;
                                gap: 0.5rem;
                            }

                            .svg {
                                width: 5rem;
                                height: 5rem;
                            }
                        }
                        // Below 500px
                                    @media(max-width: 31.25em) {
                                        .center-container {
                                            width: 95%;
                                            gap: 0.2rem;
                                        }
                                    }
                                    // Below 420px
                                            @media(max-width: 26.25em) {
                                                .center-container {
                                                    width: 100%;
                                                    gap: 0.2rem;
                                                }

                                                .svg {
                                                    width: 4rem;
                                                    height: 4rem;
                                                }

                                                .stat-box {
                                                    padding: 1rem;
                                                }

                                                .span-bold {
                                                    font-size: 1.3rem;
                                                }

                                                .span-regular {
                                                    font-size: 1rem;
                                                }
                                            }
`