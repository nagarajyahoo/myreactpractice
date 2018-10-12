import React from 'react'
import grid from '../../resources/vendor/css/grid.css'
import classes from './FoodDelivery.css'
import icons from '../../resources/vendor/css/ionicons.min.css'

const foodDelivery = (props) => {
    return (
        <section>
            <div className={[grid.row, classes.fdabove].join(' ')}>
                <h2>Get food fast — not fast food</h2>
                <p>
                    Hello, we're Omnifood, your new premium food delivery service. We know you're always busy. No time
                    for cooking. So let us take care of that, we're really good at it, we promise!
                </p>
            </div>
            <div className={[grid.row, classes.fdbelow].join(' ')}>
                <div className={[grid["span-1-of-4"], grid.col].join(' ')}>
                    <i className={[icons["ion-ios-infinite-outline"], classes.fdicon].join(' ')}/>
                    <h3>Up to 365 days/year</h3>
                    <p>
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year
                        coverage. You can also choose to order more flexibly if that's your style.
                    </p>
                </div>
                <div className={[grid["span-1-of-4"], grid.col].join(' ')}>
                    <i className={[icons["ion-ios-stopwatch-outline"], classes.fdicon].join(' ')}/>
                    <h3>Ready in 20 minutes</h3>
                    <p>
                        You're only twenty minutes away from your delicious and super healthy meals delivered right to
                        your home. We work with the best chefs in each town to ensure that you're 100% happy.
                    </p>
                </div>
                <div className={[grid["span-1-of-4"], grid.col].join(' ')}>
                    <i className={[icons["ion-ios-nutrition-outline"], classes.fdicon].join(' ')}/>
                    <h3>100% organic</h3>
                    <p>
                        All our vegetables are fresh, organic and local. Animals are raised without added hormones or
                        antibiotics. Good for your health, the environment, and it also tastes better!
                    </p>
                </div>
                <div className={[grid["span-1-of-4"], grid.col].join(' ')}>
                    <i className={[icons["ion-ios-cart-outline"], classes.fdicon].join(' ')}/>
                    <h3> Order anything</h3>
                    <p>
                        We don't limit your creativity, which means you can order whatever you feel like. You can also
                        choose from our menu containing over 100 delicious meals. It's up to you!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default foodDelivery;
