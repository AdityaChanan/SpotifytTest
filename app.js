
const getUrlParameter = (sParam) => {
    let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
        sURLVariables = sPageURL != undefined && sPageURL.length > 0 ? sPageURL.split('#') : [],
        sParameterName,
        i;
    let split_str = window.location.href.length > 0 ? window.location.href.split('#') : [];
    sURLVariables = split_str != undefined && split_str.length > 1 && split_str[1].length > 0 ? split_str[1].split('&') : [];
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

// Get Access Token
const accessToken = getUrlParameter('access_token');

// AUTHORIZE with Spotify (if needed)
// *************** REPLACE THESE VALUES! *************************
let client_id = 'cc332d7702a047d58bbab0cbe3db8f98';
// Use the following site to convert your regular url to the encoded version:
// https://www.url-encode-decode.com/
let redirect_uri = 'file%3A%2F%2F%2FD%3A%5CCode%5CSpotifyTest%5Cindex.html%20'; // GitHub Pages URL or whatever your public url to this app is
// *************** END *************************

const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;
// Don't authorize if we have an access token already
if (accessToken == null || accessToken == "" || accessToken == undefined) {
    window.location.replace(redirect);
}

console.log(accessToken)