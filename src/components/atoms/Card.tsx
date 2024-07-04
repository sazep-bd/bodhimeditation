/**
 * File Description: Card component
 */

import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface CardProps {
    children: ReactNode; // This specifies that children can be any valid React node.
    className?: string; // The '?' makes the className property optional.
    [key: string]: any; // This allows for any number of additional props with any key name and type.
}

/**
 * General card component
 * @param children children of the card component, e.g. text, icons, other components. See https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
 * @param className custom classes that override the base style, e.g. background color, font, etc
 * @param cardProps encompasses all other props supplied and applies them to the card
 */
const Card: React.FC<CardProps> = ({ children, className, ...cardProps }) => {
    const cardClasses = classNames('card-base', className);
    return (
        <div className={cardClasses} {...cardProps}>
            {children}
        </div>
    );
};

export default Card;
