import { RouteMetaDto } from "../models/route-meta.dto";
import { HomeSubroutes } from "./home-subroutes.enum";

export function getRouteMeta(theme: HomeSubroutes): RouteMetaDto {
    switch(theme) {
        case HomeSubroutes.JackSkellington:
            return {
                themeIcon: 'assets/jack.png',
                chatImage: 'assets/jack-chat.jpg',
                secondaryThemeIcon: 'assets/sally.png',
                contentImage: 'assets/jack-and-sally.jpg',
            };
        case HomeSubroutes.Deathnotes:
            return {
                themeIcon: 'assets/ryuk.jpg',
                chatImage: 'assets/ryuk-chat.jpg',
                secondaryThemeIcon: 'assets/L.jpg',
                contentImage: 'assets/deathnotes.jpg',
            };
        case HomeSubroutes.AngelOfDeath:
            return {
                themeIcon: 'assets/zack.jpg',
                chatImage: 'assets/zack-chat.jpg',
                secondaryThemeIcon: 'assets/rachel.jpg',
                contentImage: 'assets/angel-of-death.jpg',
            };
        case HomeSubroutes.TokyoGhoul:
            return {
                themeIcon: 'assets/kaneki.jpg',
                chatImage: 'assets/kaneki-chat.jpg',
                secondaryThemeIcon: 'assets/touka.jpg',
                contentImage: 'assets/tokyo-ghoul.jpg',
            };
        case HomeSubroutes.OnePeace:
            return {
                themeIcon: 'assets/zoro.jpg',
                chatImage: 'assets/zoro-chat.png',
                secondaryThemeIcon: 'assets/luffy.jpg',
                contentImage: 'assets/one-peace.jpg',
            };
        default:
            return {
                themeIcon: 'assets/jack.png',
                chatImage: 'assets/jack-chat.jpg',
                secondaryThemeIcon: 'assets/sally.png',
                contentImage: 'assets/jack-and-sally.jpg',
            };
    }
   
}