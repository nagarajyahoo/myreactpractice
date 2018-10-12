import React from 'react';
import grid from '../../resources/vendor/css/grid.css'
import classes from './Feedback.css'

const feedback = (props) => {
    return (
        <section className={classes.feedback}>
            <div className={grid.row}>
                <h2>We're happy to hear from you</h2>
            </div>
            <div className={grid.row}>
                <div className={[grid.col, grid["span-1-of-3"], classes.labels].join(' ')}>
                    <label htmlFor='name'>Name</label>
                </div>
                <div className={[grid.col, grid["span-2-of-3"], classes.userinputs].join(' ')}>
                    <input type='text' id='name' placeholder='Your name'/>
                </div>
            </div>
            <div className={grid.row}>
                <div className={[grid.col, grid["span-1-of-3"], classes.labels].join(' ')}>
                    <label htmlFor='email'>Email</label>
                </div>
                <div className={[grid.col, grid["span-2-of-3"], classes.userinputs].join(' ')}>
                    <input type='email' id='email' placeholder='Your email'/>
                </div>
            </div>
            <div className={grid.row}>
                <div className={[grid.col, grid["span-1-of-3"], classes.labels].join(' ')}>
                    <label htmlFor='foundusoptions'>How did you find us?</label>
                </div>
                <div className={[grid.col, grid["span-2-of-3"], classes.userinputs].join(' ')}>
                    <select id='foundusoptions'>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                    </select>
                </div>
            </div>
            <div className={grid.row}>
                <div className={[grid.col, grid["span-1-of-3"], classes.labels].join(' ')}>
                    <label htmlFor='newslettercheck'>Newsletter?</label>
                </div>
                <div className={[grid.col, grid["span-2-of-3"], classes.userinputs].join(' ')}>
                    <input type='checkbox' id='newslettercheck'/>
                </div>
            </div>
            <div className={grid.row}>
                <div className={[grid.col, grid["span-1-of-3"], classes.labels].join(' ')}>
                    <label htmlFor='feedbacktext'>Drop us a line</label>
                </div>
                <div className={[grid.col, grid["span-2-of-3"], classes.userinputs].join(' ')}>
                    <textarea id='feedbacktext'/>
                </div>
            </div>
            <div className={grid.row}>
                <div className={[grid.col, grid["span-1-of-3"], classes.labels].join(' ')}>&nbsp;</div>
                <div className={[grid.col, grid["span-2-of-3"], classes.userinputs].join(' ')}>
                    <button>Send it!</button>
                </div>
            </div>
        </section>
    );
};

export default feedback;