import useAppData from '@/data/hook/useAppData';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';

interface GraficoProps{
    vertical?: number
    horizontal?: number
    tipo?: string
    titulo?: string
    subTitulo?: string
    formate?: any
    size?: number
    texto?: string
    legenda?: boolean
    rotacao?: string
    nomeSerie?: string
    cor?: boolean
    dado?: any
    serie?: any
    mudar?: boolean
    categoria?: any
}

export default function GraficoGNC(props: GraficoProps){
    // drilldown(HighCharts);

    const {tema} = useAppData()

    const dados = {
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
             '#FF9655', '#FFF263', '#6AF9C4'],
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: props.tipo,
            height: props.vertical,
            width: props.horizontal,
            backgroundColor: ''
        },
        title: {
            text: props.titulo,
            style: tema === 'dark' ? {
                color: '#fff',
                font: 'bold 25px "Trebuchet MS", Verdana, sans-serif'
            } : {
                color: '#000',
                font: 'bold 25px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        subtitle: {
            text: props.subTitulo
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        tooltip: {
            headerFormat: `<span style="font-size:11px"></span><br>`,
            pointFormat: props.formate
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                innerSize: props.size,
                dataLabels: {
                    enabled: true,
                    format: props.texto,
                    style: {
                        color: (HighCharts.theme) || tema === 'dark' ? 'white' : 'black'
                    }
                },
                showInLegend: true
            },
            column: {
                dataLabels: {
                    enabled: true,
                    format: props.texto,
                    style: {
                        color: (HighCharts.theme) || tema === 'dark' ? 'white' : 'black'
                    }
                },
            },
            bar: {
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: props.texto,
                    style: {
                        color: (HighCharts.theme) || tema === 'dark' ? 'white' : 'black'
                    }
                }
            },
            spline: {
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: props.texto,
                    style: {
                        color: (HighCharts.theme) || tema === 'dark' ? 'white' : 'black'
                    }
                }
            },
            line: {
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: props.texto,
                    style: {
                        color: (HighCharts.theme) || tema === 'dark' ? 'white' : 'black'
                    }
                }
            },
            area: {
                cursor: 'pointer',
                stacking: 'normal',
                lineColor: tema === 'dark' ? '#fff' : '#000',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                },
                dataLabels: {
                    enabled: true,
                    format: tema === 'dark' ? '<p style="color:#fff">{point.name}R${point.y:1f}</p>' : props.texto,
                    style: {
                        color: (HighCharts.theme) || tema === 'dark' ? 'white' : 'black'
                    }
                }
            }
        },
        legend: {
            enabled: props.legenda,
            itemStyle: tema === 'dark' ? {
                color: 'white',
                fontSize: '15px',
            } : ''
            
        },
        xAxis: {
            type: 'category',
            categories: props.categoria,
            labels: {
                rotation: props.rotacao,
                style: {
                    fontSize: '20px',
                    color: tema === 'dark' ? 'white' : 'black'
                }
            },
        },
        yAxis: {
            min: 0,
            labels:{
                style: {
                    fontSize: '15px',
                    color: tema === 'dark' ? 'white' : 'black'
                }
            }
        },
        series: props.mudar === true ? props.serie : [
            {
                name: props.nomeSerie,
                colorByPoint: props.cor,
                data: props.dado,
            }
        ],
        // // drilldown: {
        //     breadcrumbs: {
        //         position: {
        //             align: 'right'
        //         }
        //     },
        //     series: props.serie
        // }

    };
    
    return (

        <div>
            <HighChartsReact highcharts={HighCharts} options={dados}/>
        </div>
    )
}