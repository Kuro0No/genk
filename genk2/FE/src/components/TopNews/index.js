import React, { useEffect, useState } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Grid, ImageList, ImageListItem, Typography } from '@material-ui/core';
import CustomerService from 'services/newsService';
import './index.scss'

const TopNews = () => {
    const [list, setList] = useState({
        data: [],
        total: 0
    })
    const [listLeft, setListLeft] = useState({
        data: [],
        total: 0
    })
    const getData = () => {
        CustomerService.getTopNewsList().then(res => {
            setList(res.data)
        })
    }
    const [width,setWidth] = useState()
    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', resize)
        
        return () => resize

    },[])


    return (
        <div >
            <Grid container className='top-new-section'>
                <Grid xs={7} className='py-3'>
                    {list.data.slice(0, 3).map((item, index) => {
                        return <Grid spacing={5} xs={index === 0 ? 12 : 6} className={`pb-3 pe-4 ${index === 0 ? '' : 'd-inline-flex'}`}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height={width > 900 ? 320 : 150}
                                        image={item.img}
                                        alt="green iguana"
                                    />
                                    <CardContent className='px-0'>
                                        <Typography className='left-title-card' gutterBottom variant="h6" component="div">
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    })}
                </Grid>


                <Grid xs={width > 900 ? 3 : 5} className='py-3'>
                    {list.data.slice(3).map((item, index) => {
                        return <Grid xs={12} className="card-right">
                            <Card >
                                <CardActionArea className={`${index === 0 ? '' : 'd-flex'}`}>
                                    <CardMedia
                                        component="img"
                                        style={{width: index ===0 ? '100%' : '120px'}}
                                        image={item.img}
                                        alt="green iguana"
                                        className='right-img'
                                    />
                                    <CardContent  >
                                        <Typography className='right-title' gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                       
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    })}
                </Grid>
            </Grid>
        </div >

    )
}

export default TopNews