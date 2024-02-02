import "./styles/PickYourCar.css";

const PickYourCar = () => {
    return (
        <section id="pick-your-car-section">
            
            <div id="pick-car-container">
                <section class="carousel" aria-label="Gallery">
                    <ol class="carousel__viewport">
                        <li id="carousel__slide1"
                            tabindex="0"
                            class="carousel__slide">
                            <div class="carouse__snapper"></div>
                                <a href="#carousel__slide2"
                                class="carousel__prev">Go to last slide</a>
                                <a href="#carousel__slide2"
                                class="carousel__next">Go to next slide</a>
                            
                        </li>
                        <li id="carousel__slide2"
                            tabindex="0"
                            class="carousel__slide">
                            <div class="carouse2__snapper"></div>
                            <a href="#carousel__slide1"
                            class="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide1"
                            class="carousel__next">Go to next slide</a>
                        </li>
                        
                        
                    </ol>
                    <aside class="carousel__navigation">
                        <ol class="carousel__navigation-list">
                            <li class="carousel__navigation-item">
                                <a href="#carousel__slide1"
                                class="carousel__navigation-button">Go to slide 1</a>
                            </li>
                            <li class="carousel__navigation-item">
                                <a href="#carousel__slide2"
                                class="carousel__navigation-button">Go to slide 2</a>
                            </li>
                        
                        </ol>
                    </aside>
                </section>

            </div>
        </section>
    )
}

export default PickYourCar;