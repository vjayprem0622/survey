import React, { FC, useRef, useCallback } from 'react';
var $ = require("jquery");
if (typeof window !== "undefined") {
    // Client-side-only code
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;


const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});


const Responsive = {
    0: {
        items: 3,
        margin: 5
    },
    768: {
        items: 4,
        margin: 10
    },
    1024: {
        items: 3.5,
        margin: 20
    }
}

export default function Slider() {

    return (
        <div>

            <OwlCarousel
                animateIn={true}
                autoplay
                dots
                responsive={Responsive}
            >
                <div className="slideritem">
                    <Card
                        style={{
                        }}
                        hoverable
                    >
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </div>

                <div className="slideritem">
                    <Card
                        style={{
                        }}
                        hoverable
                    >
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </div>

                <div className="slideritem">
                    <Card
                        style={{
                        }}
                        hoverable
                    >
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </div>


                <div className="slideritem">
                    <Card
                        style={{
                        }}
                        hoverable
                    >
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </div>


                <div className="slideritem">
                    <Card
                        style={{
                        }}
                        hoverable
                    >
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </div>


            </OwlCarousel>

        </div>

    );
}