import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import CustomerService from 'services/newsService';
import './index.scss'

const TabsControlContent = () => {
    const [value, setValue] = useState(0);
    const [list, setList] = useState({
        data: [],
        total: 0
    })

    const tabs = [
        { name: "Đáng chú ý", value: 0 },

    ]
    const getData = () => {
        CustomerService.getRemarkableNewsList().then(res => {
            setList(res.data)
        })
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <section className="tab-container">
            <Box sx={{ width: '100%' }} className=" pb-5">
                <Tabs value={value} >
                    {tabs.map(i => {
                        return <Tab label={i.name} value={i.value} key={i.value} />
                    })}
                </Tabs>

            </Box>
            <Grid className='d-flex' container spacing={2} >
                {list.data.map(item => {

                    return <Grid xs={3} className='px-1'>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={item.img}
                                    alt="green iguana"
                                    className='remark-img'
                                />
                                <CardContent>
                                    <Typography className='category' style={{ fontSize: 13, color: '#aaaa' }} color="text.secondary" gutterBottom>
                                        {item.category}
                                    </Typography>
                                    <Typography className='title' gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                })}

            </Grid>
            <div className='border-bottom'></div>
        </section>
    )

}

export default TabsControlContent