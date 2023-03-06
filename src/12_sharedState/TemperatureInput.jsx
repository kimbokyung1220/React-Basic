const scaleNames = {
    c: "섭씨",
    f: "화씨",
}

function TemperatureInput(props) {
    // 온도값이 변경될 때마다 상위 컴포넌트로 전달됨
    const handleChange = (e) => {
        props.onTemperatureChange(e.target.value)
    }

    return(
        <>
        <fieldset>
            <legend>
                온도를 입력해 주세요(단위: {scaleNames[props.scale]})
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
        </>
    );
}

export default TemperatureInput;