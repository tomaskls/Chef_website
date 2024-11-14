import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function YouTubeEmbed({ embedId }) {
  return (
    <Box sx={{ position: 'relative', paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
      <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Box>
  );
}

YouTubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
  };
export function Video1() {
    const embedId = 'wLL8H_h_nvs'; // Pakeiskite su savo video ID
  
    return (
      <YouTubeEmbed embedId={embedId} />
    );
  }
export function Video2() {
    const embedId = 'BIG1h2vG-Qg'; // Pakeiskite su savo video ID
  
    return (
      <YouTubeEmbed embedId={embedId} />
    );
  }