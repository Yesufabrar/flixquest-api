import dotenv from "dotenv";
dotenv.config();

export const tmdbBaseUrl = "https://api.themoviedb.org";
export const tmdbKey = process.env.TMDB_KEY;
export const daddyliveReferrer = "https://lewblivehdplay.ru/";
export const daddyliveUserAgent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";
export const daddyliveStreamBaseUrl =
    "https://webhdrunns.onlinehdhls.ru/lb/premium";
export const daddyliveTrailingUrl = `/index.m3u8?|referer=${daddyliveReferrer}`;
export const daddylive247Url = "https://dlhd.so/24-7-channels.php";
