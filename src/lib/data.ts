import {colors} from "./colors";
import Html from '@/comp/Html.astro';
import Css from '@/comp/Css.astro';
import Javascript from '@/comp/Javascript.astro';
import Php from '@/comp/Php.astro';
import Figma from '@/comp/Figma.astro';
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Project{
    title: string;
    website: string;
    repository: string;
    color: string;
    desktopImage: string;
    mobileImage: string;
    techs: AstroComponentFactory[];
}

export const project: Project[] = [
    {
        title: 'Positivus',
        website: 'https://francunhaduarte.github.io/Positivus/',
        repository: 'https://github.com/FranCunhaDuarte/Positivus',
        color: colors.green.accent,
        desktopImage: './sources/Positivus_1_.webp',
        mobileImage: './sources/Positivus_2_.webp',
        techs:  [Html, Css, Javascript, Figma],
    },
    {
        title: 'Porto Novo Barano',
        website: 'https://portonovobarano.net/',
        repository: 'https://github.com/FranCunhaDuarte/PortoNovoBarano',
        color: colors.blue.accent,
        desktopImage: './sources/PortoNovo_1_.webp',
        mobileImage: './sources/PortoNovo_2_.webp',
        techs:  [Html, Css, Javascript, Figma, Php],
    },
    {
        title: 'Fendyan S.A.',
        website: 'https://www.fendyansa.com/',
        repository: 'https://github.com/FranCunhaDuarte/FendyanSa',
        color: colors.gray.accent,
        desktopImage: './sources/Fendyan_1_.webp',
        mobileImage: './sources/Fendyan_2_.webp',
        techs:  [Html, Css, Javascript, Figma, Php],
    }
]
