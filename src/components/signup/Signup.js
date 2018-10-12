import React from 'react'
import grid from '../../resources/vendor/css/grid.css'
import classes from './Signup.css'
import icons from '../../resources/vendor/css/ionicons.min.css'
import common from '../../index.css'

const signup = () => {
    return (
        <section className={classes.sectionplans}>
            <div className={grid.row}>
                <h2>Start eating healthy today</h2>
            </div>
            <div className={grid.row}>
                <div className={[grid.col, grid["span-1-of-3"]].join(' ')}>
                    <div className={classes.planbox}>
                        <div>
                            <h3>Premium</h3>
                            <p className={classes.planprice}>$399 <span>/ month</span></p>
                            <p className={classes.planpricemeal}>That's only 13.30$ per meal</p>
                        </div>
                        <div className={classes.listpoints}>
                            <ul>
                                <li><i className={[icons["ion-ios-checkmark-empty"], classes.iconsmall].join(' ')}/>1
                                    meal every day
                                </li>
                                <li><i className={[icons["ion-ios-checkmark-empty"], classes.iconsmall].join(' ')}/>1
                                    meal every day
                                </li>
                                <li><i className={[icons["ion-ios-checkmark-empty"], classes.iconsmall].join(' ')}/>Order
                                    24/7
                                </li>
                                <li><i className={[icons["ion-ios-checkmark-empty"], classes.iconsmall].join(' ')}/>Access
                                    to newest creations
                                </li>
                                <li><i className={[icons["ion-ios-checkmark-empty"], classes.iconsmall].join(' ')}/>Free
                                    delivery
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className={common.selected}>Sign up now</button>
                        </div>
                    </div>
                </div>
                <div className={[grid.col, grid["span-1-of-3"]].join(' ')}>
                    <div className={classes.planbox}>
                        <div>
                            <h3>Pro</h3>
                            <p className={classes.planprice}>$149 <span>/ month</span></p>
                            <p className={classes.planpricemeal}>That's only 14.90$ per meal</p>
                        </div>
                        <div className={classes.listpoints}>
                            <ul>
                                <li><i className={[icons["ion-ios-checkmark-empty"], classes.iconsmall].join(' ')}/>1
                                    meal 10 days/month
                                </li>
                                <li><i className={[icons["ion-ios-checkmark-empty"], classes.iconsmall].join(' ')}/>Order
                                    24/7
                                </li>
                                <li><i className={[icons["ion-ios-checkmark-empty"], classes.iconsmall].join(' ')}/>Access
                                    to newest creations
                                </li>
                                <li><i className={[icons["ion-ios-checkmark-empty"], classes.iconsmall].join(' ')}/>Free
                                    delivery
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className={common.ghost}>Sign up now</button>
                        </div>
                    </div>
                </div>
                <div className={[grid.col, grid["span-1-of-3"]].join(' ')}>
                    <div className={classes.planbox}>
                        <div>
                            <h3>Starter</h3>
                            <p className={classes.planprice}>19$ <span>/ meal</span></p>
                            <p className={classes.planpricemeal}>&nbsp;</p>
                        </div>
                        <div className={classes.listpoints}>
                            <ul>
                                <li><i className={[icons["ion-ios-checkmark-empty"], classes.iconsmall].join(' ')}/>1
                                    meal
                                </li>
                                <li><i className={[icons["ion-ios-checkmark-empty"], classes.iconsmall].join(' ')}/>Order
                                    from 8 am to 12 pm
                                </li>
                                <li><i className={[icons["ion-ios-close-empty"], classes.iconsmall].join(' ')}/></li>
                                <li><i className={[icons["ion-ios-checkmark-empty"], classes.iconsmall].join(' ')}/>Free
                                    delivery
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className={common.ghost}>Sign up now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default signup;