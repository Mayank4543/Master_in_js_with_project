// import React from "react";







interface ProductType {
    name?: string;
    image?: { url: string }[];
    price?: string;
    _id?: string;
}
const product: ProductType = {
    name: "blue-tshirt",
    image: [{ url: "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" }],
    price: "$300",
    _id: "abshiek"
}
const Product: React.FC<ProductType> = ({ name = "mayank", image = [{ url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRUYGBgYGhgYGBgaGhoaGBgaGBgZGRgaGBgcIS4lHCErHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrISs0NDQ0MTQ0NDQ0NjQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PzQ0ND00NDQ0NDQ0NDQ0NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABEEAACAQIEAwQGBwUIAQUBAAABAgADEQQSITEFBkEiUWFxEzKBkaGxBxRCUnLB0SNikqLwFSRDU4KywuEzNHPS4vEW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEBAQACAgICAgMBAAAAAAAAAAECEQMhEjEiQQQyI2GhE//aAAwDAQACEQMRAD8A2ASKCR70cVkk6R5DpCSbRlFklRKkSaKxNo6VhZYtGbYaGHT2ENxpBS9URwqMiFaKIgtKSIQm6RVoT9IwS4jdo6wicsBYQBFAQwsUBAQXQxQGkI7GLXaANuIyVklhG8sIVjEYmn+3qfiHyEcdJJr0/wBtU/EPkIb049s5Fc1OCS2SCC2vyQ7QgYchYwI8sZWPCAAwWhQ7wBqsNDBQ9UQYhtDpBh/VEIKcIibRcEZExDdIomJO4jAQ7Q7Q7QBNoAIvLCEAQ40MUg0hPsYpRoIAZERljkFoBmK1P9q/4h8hDqJH6g/aP+IfIRVRYtl4q5qcEeqCHDY00AEVaGBAREsSiOgRtRHgIAAIYWC0MQI1XXQwqK9kRVbYwUvVEcBREpuP8ep4YDPcu4Yog65dyT9kajX5y5M5nxXhpxfFa6O5RadNFW2pPYVreV3JhbqbVhj5XSDjedcSWJWoqXPZRUQga9S4JPv6dJfcq84NWqLRrqgdwTTdLgPYFirKb5Ta9jexynbSR3+jamxua7bfd/O/n75W8R5YGEehUSq7FcRRHaC2s1RRsPaPbM5yTem+XDfG11KKAgAhiauUUAEBhM4G8AJxoYpRpEVXAG8YPEqY3cQCXCbaVVbjqDa5kSrzAOiH2wBR9d/xfkI6wlVT4lYszLfMb6RVTjSA2KmI0qosEijiSN3+6CBNVeCc5w/Fq/8AmGWuG4lWO7/CTs9tgDHM0xdbj9SmQWN1vY6aySebVtoCYw1maAGY/wD/ALEdU+Mdp85oSBl1JtuIG1FY6GFSbQSixXMaKCCRfuvrK+lzghIRUYnYRpbC8y1bBsMdUqKurUgAD1ZCLG/cQQPYZCxPOOVihGUjQyG3NouHJzZd9NcvX8j7JGctnTXhymOXa+wVXHkv6VaSLkYoFVi2YLcZrttfu98o8Xg8Wyk4h0Zc1J0IAFnV0cWA6adTr4STxLjT10VqNQIlrZ1LM7F0tlKqDkALdRuOkrcVx52yYdsjOgL1ChNkp0kzl2vsdNvLvmEluWo9DLUw8q2jcbQAXvfy0i34tTXd1F/HWZ3NekG30lU7gjYTqjyba11Tj9IDRi3lIrcwIdl18TM16EFC19owhjEu2nxHGWYWGUXjXDKIZjfXsmUIEuOWKys7gG9kMVEMKukIrIZrfvQnqta6m8DTAsj4lRcRhMS1t41iKzZli0cTLQpHNYwQMxh2lxhn0lDQJlxhDvJGlXzO5yLY27QlYtwNzLHmNGYKFUntDQSAabAaoRGvH0adQe+LwGHX0qb+uvzhAC53Ec4ay+kQ32YfOBpnGadsSwv93/aI7gKf95QdL/kYnirg4kkG9yvyAk3h9L+8qdLXJ9wMcRlO1dxWiPrFS5AGY77bCQeH4ql6akgu7PVppYCy2Z1W5J8+krsbizVdnbdyWt3X2A8hYS++jjgwqY1Xa7eiDVL9LghUHva/+mdc4Jjj5Ws5lu6iTj+VHDuaFY0TmYVEtdSejrY6BhZrfvaWkocvDBcPxVZiWq1k9Hnb1stV1QeV81/IDvnQcRwjPma9nIOtri17hT3gSg+kVGXAtc2DVKfZ7rG+h9k5uPD59urPOXDr25RheKYikoSnVYJ902ZdOgDA2HlaWGH5lcaVKSuO9Lqfcbg/CVbKNN/H8rRNSsAJ23DG+45e2hwnEUqK6KWVvXyHfLp3EjqPfG8zjqZm+G4kJVV2NtTe3cwIN9fEHbpNMj3vtOTPHxvSpNJGBe+js1+nd43lzy+iJVfIG1pnc9fCVGBZL3ZwDfRbbjrLnhdWm1RwhJyof+5FPrTMsG7zI4xDrs/xk11uJAekIbLGSnk4kV3IMebiyuRodJVvS8YeHQaecVXMYvExYMEg0dPeYIhqLPDZpa0FMrcPiU++JZ0MSh+2PfENqrj+KZFBXfNKpsY7DfWT+aHGQEEHWUtOvptA56OpUcsbi8e4ef2iZl0zCScLUGXbWK4cymqg/eEe9q0kY8D6zoBYEfKWGCW9YWtfXr4GM4+mPrBt94fIRpqmSs7/AHKbvb8KMw38o5NoyvbG4I3HTTT3TrX0S4QCnXq21Z1p+xEDm3tqD3TknDTctps3zA/7na/oyIGBB76lQn+LL/xnfzX+NlhPk2SATD/Sw1sGnjXQfyVD+U2w/rr85z/6WnthqS99dTtbalVnLx/tGuXpyWtUAtfx/r4yuxNe52/7krELmaxYAADf8gNzqJAxeUEZb6b36+zp1m+eWuixx+y7MPWBHuYn/Tv8pruCYjPRIy3KmzEixvYG8yNNwO5T3hSfkfyl7yxjsjsmYFXW21jmW7Lp00zD2yMpuFVjRTtg2l3yYvbrk69hvzlfS9YS95STWv8Agb85zbPxUBvb2SuqAy7NPQeUhV6YjtTjFM97GLwg7QvpHXQRNCmM4vt1htek2mgHW+p198EaquNcuxOkEkNBSwNP7gkteH07erGkW0lI2giFrN800FRFI3vM/RxagTQc5UyyoF3LShocv1m+zGeN6WWFxSkWvJXCWU10/EI1gOVK/cPfLrhnK9VKiOxWytcwkFyhOPcfWmW+uYfISs5mxOTPvdxkvpoCNdLi+1vbNFiOBOa7V8wtmvbyAmQ5uIaqRc9kdD1Op/KbcWG7/rPLKKLhD9p9LXUH3H/udr+jQn6ogNxdnKnvDOf6+E4pw9QMx+8bfwgsfmPdO1/R6hTDJpcFQ5XfRxcOp6jWx6ggg9DNs9+HZz22WVuhtfqB8129s599LGb0NEFif2t7EAWsj6/GdEVrWPuPeP1nN/pic+ipb+uwF97lLfnM+P8AY8vTkVVr3Peb+zp8JFK3vJjpsI0/cJrlNlKBpsiodCHUMM1reI16j8xHUqahgVzDVbNaxG1gWly9em2ForlDMACbgHLlGX4n5SoxFtAAL9ABrfpaTjL47pb3Wro4oHIw+0AR7ReaLlaoB6f8B/OY/C9haaE3KixPxsPAbeyajldwVxJH+WfkZy6XUaoeyLd0qalS8n0HJTXulU6dRHYnCiyRsGzCLepeIQXYSWkNPU0HmYI41EaeZghsNqEiokGKJiZ1n+Z2saR/f/WX3DhcTNc2tb0f4ppeEtop7wJeKcvUXeGQyXUNhE4dL7QVmBQlSCO8R0SIrPdD5mcj4xic7u33iSPInSdNxlXLQdtL+qtzYZnIRLnp2iJVt9GLOC31tdulIkC/+ubceeOMvlRjhlldyOcroEA8Cf8AUb/IiegeTcMqYamq7ZQ6eGftMov4ltPxCcl4nyjisMHqD0dREVyrowYkWIBVDqGX1tL2y3vpNny9zbU9Eo+rLaw/xCNdL2ATQXG3SLk5cNSSt+Pg5LvUdJUWGnnb81/T+jzf6YUumHy7Z3c3IAsEA6nXVhoJdYfnVWOuHfR8hKNTIzXAPrMulzEjjtPFPkpo5AQsSVFyCVGXI2jDXUX6eAmUzmN2r/llfccLZSbsAcoNiQNAe4naGlK4udBbQ9T4eE79TxKU0y5h+EJkVfDJ0M5zz3wymA+Io2VbqKiAWFz9sW21IuPEnz1w/Jxyy1eiz4LMdxiWfKNLC2gkjBYcjtuO0fUHcO/zPy84nh2HDPldSXtmRPLq46HXQb6G42vaNgqpcAobad0OXPfUZ4yT2i0G7Yml5PchcVf/AC2+TRjGcORHZUpsW0ZWBNrZVJJBO1ydY9yzQcJibi16ZA1HcfGYQZdIvpyE9krKGK0N5YjBPY6i1triV64B8puUHt/QR1GOtGGxaw6OKGaw7pHPDz99fj+kXTwOt8/uUxaa7iUMSNPbCjBwP75H+n/7QRaLcbSm5klWNpVrTb75jqI33zGx2reaLHJcA6y+4S10XToJn+YcI5CG+bWXfBL5BeVid9Nhwl7hvBW+Ujcv4QHCU7km63NzrqSTD4ZXRWsW1dWFrEgeZk3h1NUoqiOHyAKWAsCYre1yfGI2M4NTei1Ns2VgbkGzA3uCD0IIBHlGOH4t8Oqo9QPfsB2WxY2JAKA6mwO29joJckdmYH6SWyUaeY2/aZxlNmuim2UjY3ZdYePl0rDPxqRzbVpphWSkKaHEMBamiUw6qQXLBGJbQAdoga9dJifT1E9QsB3K7KfcNDK6rx7EYiqprPmsGCjKqgXtc9kC5OXcyaXPnOn8bjnjd+xy8lt+PR7CcbqLork9rOUcKbktmN9m1PcY6nMT02V1pozIT65LXBBDAhhuQTqeuusrq7qfWRvOwPuIMj1Ki7An2jWVlwcd7shY82c6lrVcX56VhbDo2awzPVsApOuVEU6gajfp1mGxld6jFndmLam57ttBoNzt3x6omU5ht18oHSZTgxx9Ky5csvZHDHyVUfoGAPk3ZPwJm3ckt13Ewbp06nS3WdLwXaVGdbXClwdCCQLg92sWeOmdyKx79th09Ctv4ljHB9KdbX7JlvxJ8N6O2Umv6MAm7AWzaW+z3Sp4Phn9HUOU6rp4zPH0M/aO9wt77SPjlAJI0DKrgd2dQxA8ASR7Je4bhud0R8yoQSzC1xYE9fKPYnAYG+V8Q4KBUIHTKLC/Y3747EY3TCvfXWPUqh1W+4F5Y8xcLFCoVQkqSQt99At7keJPukCnS7ZUMNt+m0S5SlEEUo0hQJoRHaa6xWHCncdJaulJMimnclFYnMRqZKay/NN8iAX36eUn8AclFv3CDm6muSkV7GYMSCb+EZ4CbIBe9tLyoq/q2XCh634G+Uc4D/6Wl+ARjhR0f8DfKOcD0w1P8C/KK+zx9RYs3ZmN5m5ZfGVKeZ8lKmGJNszMzlQAo22Xfx2mrSrm7I0jnoyftXGmnlvaEO9VgMTyphqGHqsiFnSmxDuxZhl1JA9UaA7CY+87Dj6C5LW0cMCN9CLfnOOMhW4O40PmNDOn8a3VhZ96puvVI2A/iZfjqJV4nEkkBgR39/nfrLGqZX1xt5zTk3rqljo/SOneIFVhoALdCekRSW0fZo56Krrl7CjIz2BfPlzdbZVNh3bmaBSw3IEqOCL+wB+8739gQCTst2APePnOXP8AaizZ7FPaqfCmp/nEmUM2RslyMn2dtTBj8Kv1x0t2fRgb+R3k3BUgiN2x2VC2Gx63kT0d9lcCdi5G+VSdfLaZ3C8PrVruiM+Z+0Rb1jqb323mp4OihwA4YvmHtCE/8o/g+DVkptTzhCzhwyE7ZSGB28I9pkZXnOoDiMo1yi7eDNY29wX4ygQbmdE4hwKk9RnqK5LuAuVgBbIoF/aDKfHcERKoRFZVKXOY3IIZl3HTsiFhyssrGCXlfB0E3c+Q16QSdDbV0+Wiv2vhJlfgmdlYvayqtrd0WnMFE7NHV4xTOxh0NqzjXLhrKi5gAgI23uZHwHK7UxlD3Eta/MFFPWe19oVHmCg3qveA+jmEwz07m6lAjXW2p8z7I/w0NUpI9lUOoZVUWCgjQRK45HVwpvZGPwh8CxSjDUf/AG0+Qi+2kvUODB5bknSJpsoIsPC56R+tjFKkAyErr0McpZdixdPVbHvJ8L905LzDSyYmqv75b+Ptj/dOqenudTOcc90rYkMNnQfxKSD8Ms14MvlRnPjGfcaRfCuFmvUZButOo4HewWy/zMp9kbdtJoeQFviKjdRSI97p/wDGdHJekRlkOkUZN41h/R4iqnQVGI8FbtKPcwkFo99Bs+V8Jnwym/8AiP8A8f0lm3DwHXMezmF/K+srOWMSq4ZBfX0jn+aXVTFK25nLl7pfadxWph1qOQpNbIMoBOxK7j1dpCwrMUcsut7Dp75XYzE2xbN3UwfiJY4XH3V9uh275M9KyvaThMBnLKoCuCHW5IBuLNqPZLLCYJkIDVBnJvYNqAAQLA7jUn2CVJxNzmBsR1Gkk0s7PTcB2Flu1iftte58ooSzch6ZWmXOqqrkaKysLHXcAjcCZvmQVEKjNnfJq40v231t032i6PFQlZwxJWzJlB7tB5ajfxkOtivSsxLXJPu12HhKSz7U2OpEOTMQlusElXS3RbfYMk0alza1prV4YndHE4WndJDn3HKTMVCrmjHDMK4OqWnSn4al/VEUvDU+7GfetM5wmmQHvYF0cAXFz02k/htPLRRDbMiqrAG9jYSbjcCiI7qtmynXrsY9wLCJ6Cmbasisx6kkC5Ji+1z1Fcqm+0Tbwl+2FXuhPg17oQWs2qeEyfP9NQlF7a5nU+1VI8vVPuM6a2DWYr6S0CYZCBqaygHovYqEk2FyNLe2acXWUTldxy3E+BN5pvo2JFaqR/l2/nX9Jl6hPeB5ggfEbTd/RfgSxxDnbsIPE9pm18ivvE6OW/GlFBzzpjGJFs6I3wKf8JQEza/SpglQ0GDdoh1I6lQUIPsLH+LzmBVzFjn8Zs5jt0HlBEOGQstyHcHbUZr6e+3sMtsZk+ynWFyLwq+DpllsXZ38wWIU+4CaP+wlOpBMyyym2dl2ymOpg49go7Poxp7FvH61K2fbWTfqtJcTmzMahAUICCSGsL5bXsB16S0rcHBvuLzOLylUnCaQZwrDS00dVFRLKLeUi4PhmRww6Sxr1AVj6TNsfiati5yXuAwPmNfjeU1LQtoR3TV1KF1Pmfde/wCZle+GGu0AzdZmbYGCXbU1HUQS9wtOnqscUTL/ANr1x9z3H9YtONVb2JQez/uZNdVpWEMCZavxiqPtoB7P1i8Nxl2BPpE000C6/HSA1Vzxv/wv5H5GN8tL/daI/cErnxTupVyGBBGluojGEq1qaKiGyqLAGxsPOGj+mpcRRWZUcVxA3Kn2RxOP1b2KKfKPxqWidZjPpNp/3RTrcVUI9quPzlmOYWvdqRlJzxxEVsE4CEFWRvc4B+DGXh1lCrlbi3f72HwzTo/0VH9hWW+1W9u7MidB4qZzljNv9F+MVHxCubArSI0vqC4PzE35Z8aUqr+leqfrdNL6LRUjzd3v/tWYlTNb9KFcPjbqbgUqY+LNY/xfGVnJmBFbG0Eb1Q4du7Knb18yoHtmMaT07XwHhzUcPSpm10RFb8QUZvjeWjK3d8oqnY9QfbHgszt2zc7wL24gCSL5CADuTlGnuF5uEZjuPhMFwxw3E0/EfhTadKCxReXtFyi20r+I0AUNt5diMYs9gxpZT+z3YadJCrcKqZSMut++axattMg2veRjxVO4e6BMl/ZFT7sE1v8AaFM9PnBAOajlLGfeH8Zj2H5Pxea5K9ftmdVFoYAkbrfpyutyVina5KC/eSfykvBcm4lEdQyEsyncj1fZOk6RQAhujUc6wnDcdSD9gnuysCPnLDH46stPVHVsg2UntaXHzm2yQmWVup8Y5L/bOIB9cr5jYeRkujzBWG7I1x1Uae72zpFTDK2jKD5gGQavAcO29JPYtj8I/IaZOlzA+zKh1t1H/wCQcQ4r6RKlA0h21ZAwYWuwIBF/GxmiflXDa2QjyZvzkKtyen2ajjzsw/KOZQvGuQBpp+RsSiPW9JfVUtYX2L3v7xKPi2ENKrUpn7FR1v3gMcp9osfbLDlPCvUrMiAXam+hNtin5Ezqz7xZz2p+aMVnxVZgCBmAW+hsqqo08lB9sv8A6OcEGatUJAKqqKSbesSzf7V98TxwUaqlKlN0rUOwXTK2YdVqKSPVNxv036QuE0glKyhrB2uSOt+pGmwE5ZyS9fboz47jP6bx8K42cfA/KGj1AdGb2EiY1MUwOjm19Rcx1eJvcHOTYnrKY6X9bBlK/pkurDLY9nSy5d7dbm8s04ziBu9/ML+kxr8arEeue/UKR8RErxuqLWIN+8fpFqC9twvMdUbhT5r+hhvzIzCxRf5hMYvHmB7SK1+7QjU+/S0cbjii90Omuh8v1hqDTWpzCOqdLaN+olY2NW5OU6m/QyiHG0P2SPiI4nFKJFyw9zD8t4rjC00FLHU+uYez9IUohjaR2Zf4hDh4jTo6sY6pkBMTJCV5m2SDADGHrQkrQCSLQ10EaFSKVoAot/Vokkw7xN4AMx7oWsItErU8DAOR8/UCmOqHo6o9unqBD8UJieR69sfRAFswqIfbTcj4qJpud8CjFcQ4bMAEyZgEZVZmNyLsT2rXuNxpInL+Nw1PEIn1ZAxZQlVS2ZSewb52Y216HwtN8ufGYzH70eHBllvOeoz3F0PpcU9/Xq1NfDORYd+gmy+jirmpVl7qgbYWOZANv9My5YBcVQdO3SZzc2BsCxLXO4Nibd2vWaL6MUIo1X6O6qPHIDcj+P4ThwmUy7d3N43iln9NbiOHUn9dEbzUGV1blnDN/h5fwsw/OXJq+ET6Ud86HnsrX5MoH1KlRe7VWHykCryYwN0rA/iQj4gmbhgO8ROXw+EN0ajnNflXEg6ZH16NY+5gJExfAsQp/wDCxFhqtm1AF9jOnsnh8Ihk8Pyj8qPGOTHh1VfWpuvdcEfOF9VqhbFWCk3ykgbdSpPcd/GdYZP3flGauERhZkRvNVMfkWnKvqtT7j9RtCnTW4NRP+GvsFoUPIaWqUfKPrT8oSFT1j6pMWthr0UNaflHwogNO+zEQ1S6IRPGLVfGKWge+GqEQ7HROSAr4RzJAEj7LpHalEFLSWUhFI+w5dzjxvM5VLn0eYhT2TYEZ27W9yNANwvnKDDcQDOrsl2JUWOZbknTLcamwJ07p0vE8l4Z3Z+2hYknK7qCSbm/6STwzljD0GLonaIsWJJ08ibDztJ8Zvbec2Ux8Z6UnMnKIr1DVp1TTdlKOcmYOpGXUXGttL91pecE4QMPRSkhuEFrkAEnck77mXHo/KGi+ErbG3rSP6Hw+UHovCSiYAfGNKK6a7f17oSpoZKcQgBEENkP9XiSJNZRG2A7owhlPCIKrJbgRsqO4/KI0Y2gi2WCGwmejWOppsb+esAYRwPA7SDW7190NMSvcR5gxTGNugPSBJKMDsYqV/1Ubj+vdFXcbEe8/nAJ14VpCOMZfWW/lf8ASOLj0OhOU+OnxjJIIhWMC1QdrHyMPP5QBlyYi/feKdjeEp1iMC0NHiWgVYAot4wiYdvD4QwwjIC8MOYbt4xIMAJj4QrQEwXgBFYWWEzxrPFsFso/oQRDOO74mCBjWODpBBFDpyHBBGktdooQoIAVVB3SFi6S6aDpBBGBU947nI6wQRGAaOpvBBGAaBYcECCGBBBAA0TBBAEvGzBBADEbfaCCI0epBBBAP//Z" }], price = "$300", _id = "xx" }) => {
    if (!name || !image || image.length === 0 || !price || !_id) {
        return <div>Product information is missing.</div>;
    }

    return (
        <>
            <section className="bg-white body-font">
                <div className="  flex  items-center justify-center flex-wrap space-x-1">
                    <div className="group my-10 flex w-full flex-col max-w-xs  overflow-hidden border border-gray-100 bg-white shadow-md">
                        <a className="relative flex h-60 overflow-hidden" href="#">
                            <img
                                className=" object-fit  object-center w-full h-full"
                                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
                                alt="product image"
                            />

                            <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                                <button className="flex h-10 w-10 items-center rounded-full justify-center bg-green-900 text-white transition hover:bg-green-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <div className="mt-4 px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl tracking-tight text-slate-900 hover:text-blue-500">
                                    Lululemon Comfort Tee - White
                                </h5>
                            </a>
                            <div className="mt-2 mb-5 flex items-center justify-between">
                                <p>
                                    <span className="text-xl font-bold text-slate-900">$79</span>
                                    <span className="text-sm text-slate-900 line-through">$99</span>
                                </p>
                            </div>
                            <button className="flex items-center justify-center rounded-xl bg-green-700 px-4 py-3 font-bold font-400 text-sm text-white transition  hover:bg-green-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
                        <a className="relative flex h-60 overflow-hidden" href="#">
                            <img
                                className=" object-fit  object-center w-full h-full"
                                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
                                alt="product image"
                            />

                            <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                                <button className="flex h-10 w-10 items-center rounded-full justify-center bg-green-900 text-white transition hover:bg-green-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <div className="mt-4 px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl tracking-tight text-slate-900 hover:text-blue-500">
                                    Lululemon Comfort Tee - White
                                </h5>
                            </a>
                            <div className="mt-2 mb-5 flex items-center justify-between">
                                <p>
                                    <span className="text-xl font-bold text-slate-900">$79</span>
                                    <span className="text-sm text-slate-900 line-through">$99</span>
                                </p>
                            </div>
                            <button className="flex items-center justify-center rounded-xl bg-green-700 px-4 py-3 font-bold font-400 text-sm text-white transition  hover:bg-green-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
                        <a className="relative flex h-60 overflow-hidden" href="#">
                            <img
                                className=" object-fit  object-center w-full h-full"
                                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
                                alt="product image"
                            />

                            <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                                <button className="flex h-10 w-10 items-center rounded-full justify-center bg-green-900 text-white transition hover:bg-green-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <div className="mt-4 px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl tracking-tight text-slate-900 hover:text-blue-500">
                                    Lululemon Comfort Tee - White
                                </h5>
                            </a>
                            <div className="mt-2 mb-5 flex items-center justify-between">
                                <p>
                                    <span className="text-xl font-bold text-slate-900">$79</span>
                                    <span className="text-sm text-slate-900 line-through">$99</span>
                                </p>
                            </div>
                            <button className="flex items-center justify-center rounded-xl bg-green-700 px-4 py-3 font-bold font-400 text-sm text-white transition  hover:bg-green-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
                        <a className="relative flex h-60 overflow-hidden" href="#">
                            <img
                                className=" object-fit  object-center w-full h-full"
                                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
                                alt="product image"
                            />

                            <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                                <button className="flex h-10 w-10 items-center rounded-full justify-center bg-green-900 text-white transition hover:bg-green-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <div className="mt-4 px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl tracking-tight text-slate-900 hover:text-blue-500">
                                    Lululemon Comfort Tee - White
                                </h5>
                            </a>
                            <div className="mt-2 mb-5 flex items-center justify-between">
                                <p>
                                    <span className="text-xl font-bold text-slate-900">$79</span>
                                    <span className="text-sm text-slate-900 line-through">$99</span>
                                </p>
                            </div>
                            <button className="flex items-center justify-center rounded-xl bg-green-700 px-4 py-3 font-bold font-400 text-sm text-white transition  hover:bg-green-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Product
{/* <div className="relative w-full  flex   gap-4 py-6 px-6 ">
              <img className="h-48 aspect-video-[41/12] rounded-sm object-cover object-center dark:bg-gray-500" src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/1548919db25118af.jpg?q=20" alt="Image 1" />
              <img className="h-48 aspect-video-[41/12] rounded-sm object-cover object-center dark:bg-gray-500" src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/7ad35f2c891cc54a.jpg?q=20" alt="Image 2" />
              <img className="h-48 aspect-video-[41/12] rounded-sm object-cover object-center dark:bg-gray-500" src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/a67504e9f7c88b1f.jpg?q=20" alt="Image 3" />
              <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?4" alt="Image 4" />
              {/* <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?5" alt="Image 5" />  */}
{/* </div>  */ }