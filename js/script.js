var mySlider = new rSlider({
    target: '#mySlider',
    values: {min: 0, max: 100},
    step: 10,
    range: true,
    set: [10, 40],
    scale: false,
    labels: false,
    onChange: function (vals) {
        console.log(vals);
    }
});

    
