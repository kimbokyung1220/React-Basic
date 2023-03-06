import React from 'react';
import Card from './Card';

function ProfileCard(props) {
    return (
        <>
            <Card title="hi~~" backgroundColor="#4ea04e">
                <p>안녕하세요. bb입니다.</p>
                <p>리엑트 공부중입니다.</p>
            </Card>
            <Card title="gg" backgroundColor="blue">
                <p>안녕하세요. bb입니다.</p>
                <p>리엑트 공부중입니다.</p>
            </Card>
        </>
    );
}

export default ProfileCard;