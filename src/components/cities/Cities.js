import React from 'react'
import grid from '../../resources/vendor/css/grid.css'
import classes from './Cities.css'
import berlin from '../../resources/img/berlin.jpg'
import london from '../../resources/img/london.jpg'
import lisbon from '../../resources/img/lisbon-3.jpg'
import sanfransisco from '../../resources/img/san-francisco.jpg'
import icons from '../../resources/vendor/css/ionicons.min.css'

const cities = (props) => {
    return (
      <section className={classes.cities}>
          <div className={grid.row}>
              <h2>We're currently in these cities</h2>
          </div>
          <div className={grid.row}>
              <div className={[grid.col, grid["span-1-of-4"], classes.city].join(' ')}>
                  <img src={berlin} alt='Berlin'/>
                  <h3>Berlin</h3>
                  <div className={classes.cityfeature}>
                      <i className={[icons["ion-ios-person"], classes.smallicon].join(' ')}></i>
                      1600+ happy eaters
                  </div>
                  <div className={classes.cityfeature}>
                      <i className={[icons["ion-ios-star"], classes.smallicon].join(' ')}></i>
                      60+ top chefs
                  </div>
                  <div className={classes.cityfeature}>
                      <i className={[icons["ion-social-twitter"], classes.smallicon].join(' ')}></i>
                      <a href="#">@omnifood_lx</a>
                  </div>
              </div>
              <div className={[grid.col, grid["span-1-of-4"], classes.city].join(' ')}>
                  <img src={lisbon} alt='Berlin'/>
                  <h3>Lisbon</h3>
                  <div className={classes.cityfeature}>
                      <i className={[icons["ion-ios-person"], classes.smallicon].join(' ')}></i>
                      1600+ happy eaters
                  </div>
                  <div className={classes.cityfeature}>
                      <i className={[icons["ion-ios-star"], classes.smallicon].join(' ')}></i>
                      60+ top chefs
                  </div>
                  <div className={classes.cityfeature}>
                      <i className={[icons["ion-social-twitter"], classes.smallicon].join(' ')}></i>
                      <a href="#">@omnifood_lx</a>
                  </div>
              </div>
              <div className={[grid.col, grid["span-1-of-4"], classes.city].join(' ')}>
                  <img src={sanfransisco} alt='Berlin'/>
                  <h3>San Fransisco</h3>
                  <div className={classes.cityfeature}>
                      <i className={[icons["ion-ios-person"], classes.smallicon].join(' ')}></i>
                      1600+ happy eaters
                  </div>
                  <div className={classes.cityfeature}>
                      <i className={[icons["ion-ios-star"], classes.smallicon].join(' ')}></i>
                      60+ top chefs
                  </div>
                  <div className={classes.cityfeature}>
                      <i className={[icons["ion-social-twitter"], classes.smallicon].join(' ')}></i>
                      <a href="#">@omnifood_lx</a>
                  </div>
              </div>
              <div className={[grid.col, grid["span-1-of-4"], classes.city].join(' ')}>
                  <img src={london} alt='Berlin'/>
                  <h3>London</h3>
                  <div className={classes.cityfeature}>
                      <i className={[icons["ion-ios-person"], classes.smallicon].join(' ')}></i>
                      1600+ happy eaters
                  </div>
                  <div className={classes.cityfeature}>
                      <i className={[icons["ion-ios-star"], classes.smallicon].join(' ')}></i>
                      60+ top chefs
                  </div>
                  <div className={classes.cityfeature}>
                      <i className={[icons["ion-social-twitter"], classes.smallicon].join(' ')}></i>
                      <a href="#">@omnifood_lx</a>
                  </div>
              </div>
          </div>
      </section>
    );
};

export default cities;