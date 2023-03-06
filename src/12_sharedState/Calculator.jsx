import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';

// 믈 온도 출력 메세지
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}


// 섭시 -> 화씨
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
// 화씨 -> 섭씨
function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// 온도값, 변환하는 함수를 param으로 받아서 온도를 변환하여 return
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    // 만약 숫자가 아니면
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

// 브모 컴포넌트
function Calculator(props) {
    // 온도값
    const [temperature, setTemperature] = useState('');
    // 온도 타입
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;


    return (
        <>
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={handleFahrenheitChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        </>
    );
}

export default Calculator;