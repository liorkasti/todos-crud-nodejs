import React from 'react';
import Filter from './Filter';
import Info from './Info';
import FooterWrapper from './FooterWrapper';

export default function Footer(props) {
    const {mode, count, filter, changeFilter} = props;

    return (
        <footer className="clearfix">
            <div className="pull-left buttons">
                <FooterWrapper{...props}/>
            </div>

            <div className="pull-left">
                {`${count} items left`}
            </div>
            <div className="pull-right">
                <Filter {...{filter, changeFilter}}/>
            </div>
            <div>
                <Info {...{ mode }} />
            </div>
        </footer>
    );
}
