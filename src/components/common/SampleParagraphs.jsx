import { Typography } from "@material-ui/core";
import React from "react";

export const SampleParagraphs = () => {
	return (
		<div>
			{[...Array(20)].map((m, index) => (
				<Typography key={index} paragraph>
					Số ca Covid-19 cộng đồng tính từ ngày 27/4 đến nay lên 5.175
					ca, ở 37 tỉnh thành. Có 13 tỉnh gồm Yên Bái, Quảng Ngãi,
					Đồng Nai, Nghệ An, Quảng Ninh, Quảng Nam, Quảng Trị, Thừa
					Thiên Huế, Nam Định, Hòa Bình, Tuyên Quang, Phú Thọ, Sơn La,
					đã qua 14 ngày không ghi nhận trường hợp mắc mới.
				</Typography>
			))}
		</div>
	);
};
