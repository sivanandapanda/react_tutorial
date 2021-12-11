import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard> 
                <CommentDetail author="Sam" timeAgo="Today at 6:30 PM" comment="Nice blog post!" imageUrl={faker.image.avatar()}/>    
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 5:10 AM" comment="Wow, you did it!"imageUrl={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 11:15 PM" comment="cool blog"imageUrl={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>Are you sure?</ApprovalCard>

            <ApprovalCard>
                <h4>Warning!</h4>
                <div>
                Are you sure?
                </div>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
