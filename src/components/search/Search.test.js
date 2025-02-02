import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import store from "../../store/store";
import { Search } from './Search';

const movies = [
    {
        adult: false,
        backdrop_path: '/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg',
        genre_ids: [
            12,
            28,
            878
        ],
        id: 299536,
        original_language: 'en',
        original_title: 'Avengers: Infinity War',
        overview: 'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
        popularity: 209.373,
        poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
        release_date: '2018-04-25',
        title: 'Avengers: Infinity War',
        video: false,
        vote_average: 8.3,
        vote_count: 26272
    },
    {
        adult: false,
        backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
        genre_ids: [
            12,
            878,
            28
        ],
        id: 299534,
        original_language: 'en',
        original_title: 'Avengers: Endgame',
        overview: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.',
        popularity: 119.69,
        poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
        release_date: '2019-04-24',
        title: 'Avengers: Endgame',
        video: false,
        vote_average: 8.3,
        vote_count: 22602
    },
    {
        adult: false,
        backdrop_path: '/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg',
        genre_ids: [
            878,
            28,
            12
        ],
        id: 24428,
        original_language: 'en',
        original_title: 'The Avengers',
        overview: 'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!',
        popularity: 123.535,
        poster_path: '/tYqp6vEOo8YlVWrYQvt9nyOhsA2.jpg',
        release_date: '2012-04-25',
        title: 'The Avengers',
        video: false,
        vote_average: 7.7,
        vote_count: 28160
    },
    {
        adult: false,
        backdrop_path: '/6YwkGolwdOMNpbTOmLjoehlVWs5.jpg',
        genre_ids: [
            28,
            12,
            878
        ],
        id: 99861,
        original_language: 'en',
        original_title: 'Avengers: Age of Ultron',
        overview: 'When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.',
        popularity: 108.58,
        poster_path: '/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg',
        release_date: '2015-04-22',
        title: 'Avengers: Age of Ultron',
        video: false,
        vote_average: 7.3,
        vote_count: 20918
    },
    {
        adult: false,
        backdrop_path: '/jqFC2WjYF07hx2X7cs0XmY9jBX6.jpg',
        genre_ids: [
            28,
            878
        ],
        id: 1003598,
        original_language: 'en',
        original_title: 'Avengers: Secret Wars',
        overview: 'An upcoming Phase 6 Marvel Cinematic Universe film that will conclude the Multiverse Saga.',
        popularity: 23.843,
        poster_path: '/8chwENebfUEJzZ7sMUA0nOgiCKk.jpg',
        release_date: '2026-04-29',
        title: 'Avengers: Secret Wars',
        video: false,
        vote_average: 0,
        vote_count: 0
    },
    {
        adult: false,
        backdrop_path: '/uR952NrgispGuyqIdUbkR24vE0u.jpg',
        genre_ids: [
            28,
            878
        ],
        id: 1003596,
        original_language: 'en',
        original_title: 'Avengers: The Kang Dynasty',
        overview: 'An upcoming Phase 6 Marvel Cinematic Universe film and part of The Multiverse Saga. Will involve the Marvel Villain Kang.',
        popularity: 25.816,
        poster_path: '/utZTb3VBrH0zR77BcISU67pHuAx.jpg',
        release_date: '2025-04-30',
        title: 'Avengers: The Kang Dynasty',
        video: false,
        vote_average: 0,
        vote_count: 0
    },
    {
        adult: false,
        backdrop_path: '/gCzHEi6g8K0LIWlr6A38fmgtEfb.jpg',
        genre_ids: [
            16,
            10751,
            28,
            12,
            878
        ],
        id: 14613,
        original_language: 'en',
        original_title: 'Next Avengers: Heroes of Tomorrow',
        overview: 'The children of the Avengers hone their powers and go head to head with the very enemy responsible for their parents\' demise.',
        popularity: 20.218,
        poster_path: '/nbwvR5cfvxMtvWowIiwazVaaTVz.jpg',
        release_date: '2008-09-02',
        title: 'Next Avengers: Heroes of Tomorrow',
        video: false,
        vote_average: 6.9,
        vote_count: 209
    },
    {
        adult: false,
        backdrop_path: '/qzzAt0GakCZzbCeCJ0sFGhMIcdv.jpg',
        genre_ids: [
            28,
            14
        ],
        id: 323660,
        original_language: 'en',
        original_title: 'Avengers Grimm',
        overview: 'When Rumpelstiltskin destroys the Magic Mirror and escapes to the modern world, the four princesses of "Once Upon a Time"-Cinderella, Sleeping Beauty, Snow White, and Rapunzel-are sucked through the portal too. Well-trained and endowed with magical powers, the four women must fight Rumpelstiltskin and his army of thralls before he enslaves everyone on Earth.',
        popularity: 15.012,
        poster_path: '/1SbBKCbnULACOqWKN7eLfTu1gVm.jpg',
        release_date: '2015-03-17',
        title: 'Avengers Grimm',
        video: false,
        vote_average: 4,
        vote_count: 106
    },
    {
        adult: false,
        backdrop_path: '/fryen9fnjlm0YibKTDNGzWNBOSo.jpg',
        genre_ids: [
            53,
            878,
            28,
            12
        ],
        id: 9320,
        original_language: 'en',
        original_title: 'The Avengers',
        overview: 'British Ministry agent John Steed, under direction from "Mother", investigates a diabolical plot by arch-villain Sir August de Wynter to rule the world with his weather control machine. Steed investigates the beautiful Doctor Mrs. Emma Peel, the only suspect, but simultaneously falls for her and joins forces with her to combat Sir August.',
        popularity: 14.792,
        poster_path: '/1p5thyQ4pCy876HpdvFARqJ62N9.jpg',
        release_date: '1998-08-13',
        title: 'The Avengers',
        video: false,
        vote_average: 4.4,
        vote_count: 605
    },
    {
        adult: false,
        backdrop_path: '/9tjIgkkbajG2zMI4Yk21hpttXv0.jpg',
        genre_ids: [
            28,
            16,
            10751,
            12,
            878
        ],
        id: 14609,
        original_language: 'en',
        original_title: 'Ultimate Avengers: The Movie',
        overview: 'When a nuclear missile was fired at Washington in 1945, Captain America managed to detonate it in the upper atmosphere. But then he fell miles into the icy depths of the North Atlantic, where he remained lost for over sixty years. But now, with the world facing the very same evil, Captain America must rise again as our last hope for survival.',
        popularity: 18.909,
        poster_path: '/fKQqZEDmvKMCXEQztvMJHGou9dO.jpg',
        release_date: '2006-02-21',
        title: 'Ultimate Avengers: The Movie',
        video: false,
        vote_average: 6.8,
        vote_count: 294
    },
    {
        adult: false,
        backdrop_path: '/sORO7a1cSghfWE5GD4cSJ0qTN8O.jpg',
        genre_ids: [
            28,
            12,
            14
        ],
        id: 521720,
        original_language: 'en',
        original_title: 'Avengers Grimm: Time Wars',
        overview: 'When Rumpelstiltskin tries to take over Earth once and for all, The Avengers Grimm must track him down through time in order to defeat him.',
        popularity: 12.692,
        poster_path: '/xfAcu74DRQXeM9XqFcE5MrSRzYP.jpg',
        release_date: '2018-05-01',
        title: 'Avengers Grimm: Time Wars',
        video: false,
        vote_average: 4.8,
        vote_count: 49
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [
            35
        ],
        id: 347158,
        original_language: 'en',
        original_title: 'Bikini Avengers',
        overview: 'When the Jade Empress steals the world\'s largest diamonds, super heroes Bikini Avenger and Thong Girl must stop her before she uses the gems to build a dangerous sci-fi weapon.',
        popularity: 9.283,
        poster_path: '/ehTYWuPKwl8sXPX0I6LnvJUDaVl.jpg',
        release_date: '2015-02-24',
        title: 'Bikini Avengers',
        video: false,
        vote_average: 5.5,
        vote_count: 15
    },
    {
        adult: false,
        backdrop_path: '/ldxi7dKtud2KrStUr8V9P65ixNr.jpg',
        genre_ids: [
            12,
            16,
            28,
            878
        ],
        id: 14611,
        original_language: 'en',
        original_title: 'Ultimate Avengers 2: Rise of the Panther',
        overview: 'Mysterious Wakanda lies in the darkest heart of Africa, unknown to most of the world. An isolated land hidden behind closed borders, fiercely protected by its young king: Black Panther. But when brutal alien invaders attack, the threat leaves Black Panther with no option but to go against the sacred decrees of his people and ask for help from outsiders.',
        popularity: 16.956,
        poster_path: '/h1PKqtjuTifmTU0EqM4W0Br2pHX.jpg',
        release_date: '2006-08-08',
        title: 'Ultimate Avengers 2: Rise of the Panther',
        video: false,
        vote_average: 6.7,
        vote_count: 244
    },
    {
        adult: false,
        backdrop_path: '/zvjBC9guJVw32bZu4ODp6wzJ9Vi.jpg',
        genre_ids: [
            10751,
            16
        ],
        id: 368304,
        original_language: 'en',
        original_title: 'LEGO Marvel Super Heroes: Avengers Reassembled!',
        overview: 'The Avengers are forced to “party” with Ultron when he seeks to disassemble the team by taking control of Iron Man’s armor and enact a nefarious scheme to take over the world.',
        popularity: 12.083,
        poster_path: '/xUBZNoY7idPfqKZepnDEv7Qc8GC.jpg',
        release_date: '2015-11-16',
        title: 'LEGO Marvel Super Heroes: Avengers Reassembled!',
        video: false,
        vote_average: 6.5,
        vote_count: 109
    },
    {
        adult: false,
        backdrop_path: '/6zXs4OyZM6U4reYvddsJWeByxMX.jpg',
        genre_ids: [
            99
        ],
        id: 448366,
        original_language: 'en',
        original_title: 'Building the Dream: Assembling the Avengers',
        overview: 'Witness Marvel\'s epic journey, from its comic book origins to its blockbuster film franchises, through seven exclusive featurettes. Get the inside story, with exclusive behind-the-scenes footage and cast interviews, and discover the history behind its legendary characters and films -- Iron Man, The Incredible Hulk, Iron Man 2, Thor, Captain America: The First Avenger, and Marvel\'s The Avengers! With over 90 minutes of original footage, this is your all-access pass to Marvel and Phase One of the Marvel Cinematic Universe!',
        popularity: 8.32,
        poster_path: '/coS6rIaucxDzq20kiJozTgQ0Nmk.jpg',
        release_date: '2012-09-25',
        title: 'Building the Dream: Assembling the Avengers',
        video: true,
        vote_average: 8.4,
        vote_count: 24
    },
    {
        adult: false,
        backdrop_path: '/r5uAQQahZzcTYyPdlomDggyxHkV.jpg',
        genre_ids: [
            35,
            14
        ],
        id: 538153,
        original_language: 'en',
        original_title: 'Avengers of Justice: Farce Wars',
        overview: 'While trying to remain a good husband and father, Superbat recruits the Avengers of Justice out of retirement to stop Dark Jokester and Lisp Luthor from freezing the planet.',
        popularity: 5.823,
        poster_path: '/yymsCwKPbJIF1xcl2ih8fl7OxAa.jpg',
        release_date: '2018-07-20',
        title: 'Avengers of Justice: Farce Wars',
        video: false,
        vote_average: 3.8,
        vote_count: 12
    },
    {
        adult: false,
        backdrop_path: '/eQiRPyEWhYnuqEGfoCsCO173oIw.jpg',
        genre_ids: [],
        id: 448368,
        original_language: 'en',
        original_title: 'The Avengers: A Visual Journey',
        overview: 'Joss Whedon and others in interviews discussing the aims for this new franchise.',
        popularity: 5.706,
        poster_path: '/2kBT7KONKQTIhkMc2ZtPU11E8Ky.jpg',
        release_date: '2012-09-25',
        title: 'The Avengers: A Visual Journey',
        video: true,
        vote_average: 7.8,
        vote_count: 14
    },
    {
        adult: false,
        backdrop_path: '/fYVwmnRDCGQIpKA0QpzIEkczSes.jpg',
        genre_ids: [
            10751,
            16,
            28,
            12
        ],
        id: 940543,
        original_language: 'en',
        original_title: 'LEGO Marvel Avengers: Time Twisted',
        overview: 'When Thanos steals the quantum tunnel, the Avengers embark on a mission to stop him from changing history.',
        popularity: 3.751,
        poster_path: '/7nA9AjJ8iZvbBPsFPC2FNoFj568.jpg',
        release_date: '2022-01-17',
        title: 'LEGO Marvel Avengers: Time Twisted',
        video: false,
        vote_average: 5,
        vote_count: 2
    },
    {
        adult: false,
        backdrop_path: '/boX7D2wHtf01C7AzzPuVZAzc74x.jpg',
        genre_ids: [
            35,
            878
        ],
        id: 58906,
        original_language: 'en',
        original_title: 'Alien Avengers',
        overview: 'Charlie and Rhonda are a sweet and comfortable married couple on vacation with their lovely daughter Daphne. They find a rundown boarding house and its haggard owner, Joseph, an ex-con whose mother has just died and left him the house. He doesn\'t know why this cheerful couple would want to vacation in the worst part of Los Angeles, but he doesn\'t know they\'re vacationing from outer space, and their idea of fun is murdering lowlife out on the streets',
        popularity: 1.95,
        poster_path: '/Akd3Aqrr2q8PLKOCPOkOnB3AoJk.jpg',
        release_date: '1996-08-03',
        title: 'Alien Avengers',
        video: false,
        vote_average: 6,
        vote_count: 5
    },
    {
        adult: false,
        backdrop_path: '/oYBtXawjNhevCkIT8Na28gAsLPZ.jpg',
        genre_ids: [
            28
        ],
        id: 416101,
        original_language: 'en',
        original_title: 'Ninja Avengers',
        overview: 'Just like those Thomas Tang "so-called" Ninja films that came out on Imperial Video. This one has a tacked in plot of Richard Harrison trying to fight off European Ninjas in footage that doesn\'t even match the film! The whole film is basically a RED SUN rip-off (but this time the Japanese steal a statue) that has a DJANGO like character carrying a cross that contains a gattling gun.',
        popularity: 1.21,
        poster_path: '/4viIQgcqj9e8RD09khPg1LoE9iL.jpg',
        release_date: '1987-01-01',
        title: 'Ninja Avengers',
        video: false,
        vote_average: 4.8,
        vote_count: 4
    }
]

describe('Search Component', () => {
    it('renders movie search field', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Search />
                </Provider>
            </BrowserRouter>
        );
        const searchField = screen.getByPlaceholderText(/movie title/i);
        expect(searchField).toBeInTheDocument();
    });

    it('renders search field with typed text', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Search />
                </Provider>
            </BrowserRouter>
        );
        const searchField = screen.getByPlaceholderText(/movie title/i);
        fireEvent.change(searchField, { target: { value: 'Avengers' } });
        const searchFieldWithText = screen.getByDisplayValue('Avengers');
        expect(searchFieldWithText).toBeInTheDocument();
    });

    it('renders auto suggestion on keyword search', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Search />
                </Provider>
            </BrowserRouter>
        );
        jest.fn(axios.get).mockResolvedValue({ data: movies});
        const searchField = screen.getByPlaceholderText(/movie title/i);
        fireEvent.change(searchField, { target: { value: 'Avengers' } });
        expect(await (await screen.findAllByRole('listitem')).length).toEqual(movies.length);
    });
});
