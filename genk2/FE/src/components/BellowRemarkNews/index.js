import React, { useEffect, useState } from 'react'
import './index.scss'
import CustomerService from 'services/newsService';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import CategoryNewService from 'services/categoryNewsService';


const BellowRemarkNews = () => {

    const [list, setList] = useState({
        data: [],
        total: 0
    })
    const [listMObile, setListMobile] = useState({
        data: [],
        total: 0,
        category: ''
    })
    const [listNotIgnore, setListNotIgnore] = useState({
        data: [],
        total: 0,
        category: ''
    })
    const [listEmagazine, setLisEmagazine] = useState({
        data: [],
        total: 0,
        category: ''
    })
    const tabs = [
        { name: "Đáng chú ý", value: 0 },

    ]
    const getData = () => {
        CustomerService.getBellowRemarkableNewsList().then(res => {
            setList(res.data)
        })
    }
    const getMobileData = () => {
        CategoryNewService.getMobileNewsList().then(res => {
            setListMobile(res.data)
        })
    }
    const getNotIgnore = () => {
        CategoryNewService.getNotIgnoreNewsList().then(res => {
            setListNotIgnore(res.data)
        })
    }
    const getEmagazineNewsList = () => {
        CategoryNewService.getEmagazineNewsList().then(res => {
            setLisEmagazine(res.data)
        })
    }
    useEffect(() => {
        getData()
        getMobileData()
        getNotIgnore()
        getEmagazineNewsList()
    }, [])
    return (
        <Grid container className='bellow_container'>
            <Grid xs={6} className='wrapper-left'>
                {list.data.map(item => {
                    return <Card className='card-left' key={item.id} style={{ display: 'flex' }}>

                        <Grid xs={6}>
                            <CardMedia
                                component="img"
                                style={{ width: '100%' }}
                                image={item.img}
                                alt="Live from space album cover"
                                className='media_img'

                            />
                        </Grid>
                        <Grid xs={6}>

                            <CardContent>
                                <Typography style={{ fontSize: 13, color: '#aaaa' }} component="div" variant="h5">
                                    {item.category}
                                </Typography>
                                <Typography className='title mt-1' component="div" variant="h5">
                                    {item.title}
                                </Typography>
                                <Typography className='sub_title  my-1' variant="subtitle1" color="text.secondary" component="div">
                                    {item.short_des}
                                </Typography>
                                <Typography className='sub_title' variant="subtitle1" color="text.secondary" component="div">
                                    4 giờ trước
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Card>
                })}
            </Grid>
            <Grid xs={6} className='wrapper-right'>
                <RightLayoutRemarkNews item1={listMObile} item2={listNotIgnore} item3={listEmagazine} />
            </Grid>
        </Grid>
    )
}



function RightLayoutRemarkNews(props) {
    const { item1, item2, item3 } = props
    console.log(item1)

    return <div style={{ paddingTop: '30px' }}>
        <Box className='margin-bottom-25' style={{ border: '1px solid #e5e9ec', borderRadius: '8px', padding: '20px' }}>
            <Typography className='category ' component="h2" variant="h2">
                {item1.category}
            </Typography>

            <>
                {item1.data.map((item, index) => {

                    return index === 0 ? <Card className='d-flex p-15 card-first'>
                        <CardMedia
                            component="img"
                            style={{ width: '100px', height: '100px' }}
                            image={item.img}
                            alt="Live from space album cover"
                            className='media_img'

                        />

                        <CardContent>

                            <Typography className='title-item1 line-3' component="div" variant="h5">
                                {item.title}
                            </Typography>
                            <Typography className='sub-title-item1 line-4' variant="subtitle1" color="text.secondary" component="div">
                                {item.short_des}
                            </Typography>

                        </CardContent>
                    </Card>
                        :
                        <Typography className='item-no-img line-3'>
                            {item.title}
                        </Typography>
                })}

            </>

        </Box>
        <Grid container className='d-flex'>
            <Grid xs={6} className=' have-2'>
                <Box className='margin-right-12 '>
                    <Typography className='category ' component="h2" variant="h2">
                        {item2.category}
                    </Typography>

                    <>
                        {item2.data.map((item, index) => {

                            return index === 0 ? <Card className=' card-first'>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: '122px' }}
                                    image={item.img}
                                    alt="Live from space album cover"
                                    className='media_img'

                                />

                                <CardContent className='title-item2'>

                                    <Typography className=' line-3 fs-13' component="div" variant="h5">
                                        {item.title}
                                    </Typography>

                                </CardContent>
                            </Card>
                                :
                                <Typography className='item-no-img line-3 fs-13'>
                                    {item.title}
                                </Typography>
                        })}

                    </>
                </Box>
            </Grid>
            <Grid xs={6} className='have-2'>
                <Box className='p-20'>
                    <Typography className='category ' component="h2" variant="h2">
                        {item3.category}
                    </Typography>

                    <>
                        {item3.data.map((item, index) => {

                            return index === 0 ? <Card className=' card-first'>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: '122px' }}
                                    image={item.img}
                                    alt="Live from space album cover"
                                    className='media_img'

                                />

                                <CardContent className='title-item3'>

                                    <Typography className=' line-3 fs-13' component="div" variant="h5">
                                        {item.title}
                                    </Typography>

                                </CardContent>
                            </Card>
                                :
                                <Card className='d-flex card-first'>

                                    <Grid xs={9}>

                                        <CardContent className='title-item3'>

                                            <Typography className='line-3 no-bold fs-13' component="div" variant="h5">
                                                {item.title}
                                            </Typography>

                                        </CardContent>
                                    </Grid>
                                    <Grid xs={3}>

                                        <CardMedia
                                            component="img"
                                            style={{ width: '100%', height: '40px' }}
                                            image={item.img}
                                            alt="Live from space album cover"
                                            className='media_img'

                                        />
                                    </Grid>
                                </Card>
                            // <Typography className='item-no-img line-3 fs-13'>
                            //     {item.title}
                            // </Typography>
                        })}

                    </>
                </Box>
            </Grid>
        </Grid>
    </div>
}


export default BellowRemarkNews


