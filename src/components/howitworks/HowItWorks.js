import React from 'react'
import grid from '../../resources/vendor/css/grid.css'
import classes from './HowItWorks.css'
import image from '../../resources/img/app-iPhone.png'
import downloadApple from '../../resources/img/download-app.svg'
import downloadAndroid from '../../resources/img/download-app-android.png'

const howItWorks = (props) => {
    return (
        <section className={classes.hiw}>
            <div className={grid.row}>
                <h2>How it works — Simple as 1, 2, 3</h2>
            </div>
            <div className={grid.row}>
                <div className={[grid.col, grid["span-1-of-2"], classes.appscreen].join(' ')}>
                    <img src={image} alt='Apple Screen'/>
                </div>
                <div className={[grid.col, grid["span-1-of-2"], classes.infolist].join(' ')}>
                    <div className={classes.info}>
                        <div className={classes.numer}>1</div>
                        <div className={classes.numerinfo}>Choose the subscription plan that best fits your needs and sign up today.</div>
                    </div>

                    <div className={classes.info}>
                        <div className={classes.numer}>2</div>
                        <div className={classes.numerinfo}>Order your delicious meal using our mobile app or website. Or you can even call us!</div>
                    </div>

                    <div className={classes.info}>
                        <div className={classes.numer}>3</div>
                        <div className={classes.numerinfo}>Enjoy your meal after less than 20 minutes. See you the next time!</div>
                    </div>

                    <div className={classes.downloadimages}>
                        <a href='/'><img src={downloadApple} alt='Apple Download'/></a>
                        <a href='/'><img src={downloadAndroid} alt='Apple Andoid'/></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default howItWorks;