

var width = parseInt(d3.select('#scatter').style('width'));
var height = width - width / 3.9;
var margin = 20;
var pad = 40;
var labelArea = 110;

var svg = d3
    .select('#scatter')
    .append('svg')
    .style('width',width)
    .style('height',height)
    .style('border', '2px solid black')
    .attr('class','chart')

svg
    .append('g')
    .attr('class','xText')

var xText = d3.select('.xText');

xText
    .append('text')
    .text('In Poverty (%)')
    .attr('y', -26)
    .attr('data-name','poverty')
    .attr('data-axis','x')
    .attr('class','aText active x')
    .attr('transform',`translate(${((width-labelArea)/2 + labelArea)}, ${height - margin - pad})`)
    
xText
    .append('text')
    .text('Age (%)')
    .attr('y', 0)
    .attr('data-name','age')
    .attr('data-axis','x')
    .attr('class','aText inactive x')
    .attr('transform',`translate(${((width-labelArea)/2 + labelArea)}, ${height - margin - pad})`)
    

