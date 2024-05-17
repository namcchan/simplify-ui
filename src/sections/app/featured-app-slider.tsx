import { Box, Stack, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Slider, { Settings } from 'react-slick';

const data = [
  {
    title: 'The Ultimate Guide to Productivity Hacks',
    desc: 'She eagerly opened the gift, her eyes sparkling with excitement.',
    img: '/assets/images/cover/cover_1.jpg',
  },
  {
    title: 'The Ultimate Guide to Productivity Hacks',
    desc: 'She eagerly opened the gift, her eyes sparkling with excitement.',
    img: '/assets/images/cover/cover_2.jpg',
  },
  {
    title: 'The Ultimate Guide to Productivity Hacks',
    desc: 'She eagerly opened the gift, her eyes sparkling with excitement.',
    img: '/assets/images/cover/cover_3.jpg',
  },
];

export const FeaturedAppSlider = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box component={Slider} height={{ xs: 280, md: 320 }} {...settings}>
      {data.map((item, index) => (
        <Box key={index} height={{ xs: 280, md: 320 }} position="relative">
          <Stack
            sx={{
              padding: 4,
              position: 'absolute',
              bottom: 0,
            }}
          >
            <AnimatePresence>
              <motion.div
                initial={{
                  opacity: 0,
                  translateX: 120,
                }}
                whileInView={{
                  opacity: 1,
                  translateX: 0,
                  transition: { duration: 0.4 },
                }}
              >
                <Typography
                  variant="caption"
                  textTransform="uppercase"
                  fontWeight="bold"
                  color="primary.main"
                >
                  Featured App
                </Typography>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  translateX: 120,
                }}
                whileInView={{
                  opacity: 1,
                  translateX: 0,
                  transition: { duration: 0.6 },
                }}
              >
                <Typography textOverflow="ellipsis" variant="h5" color="white">
                  {item.title}
                </Typography>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  translateX: 120,
                }}
                whileInView={{
                  opacity: 1,
                  translateX: 0,
                  transition: { duration: 0.8 },
                }}
              >
                <Typography textOverflow="ellipsis" variant="caption" color="white">
                  {item.desc}
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Stack>
          <Box
            component="span"
            className="component-image"
            sx={{
              height: { xs: 280, md: 320 },
              position: 'absolute',
              inset: 0,
              zIndex: -1,
              '&::before': {
                content: '""',
                top: 0,
                left: 0,
                width: 1,
                height: 1,
                zIndex: 1,
                position: 'absolute',
                background: 'linear-gradient(rgba(22, 28, 36, 0) 0%, rgb(22, 28, 36) 75%)',
              },
            }}
          >
            <LazyLoadImage effect="blur" src={item.img} alt={item.title} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
