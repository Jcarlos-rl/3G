const data = [
    {
        "name" : 'Gates',
        "id" : 'Gates',
        "image" : 'images/marcas/gates.jpg',
        "catologues" : [
            {
                "name" : 'Hydraulics',
                "file" : 'files/Hydraulics.pdf'
            },
            {
                "name" : 'Bombas de Dirección Hidráulica',
                "file" : 'files/Bombas.pdf'
            },
            {
                "name" : 'AMFLO',
                "file" : 'files/AMFLO.pdf'
            },
            {
                "name" : 'Catálogo Retro',
                "file" : 'files/Retro.pdf'
            },
            {
                "name" : 'Cilindros Perfilados',
                "file" : 'files/Perfilados.pdf'
            },
            {
                "name" : 'Servicio Pesado Neumática',
                "file" : 'files/Pesado.pdf'
            },
            {
                "name" : 'Hidráulica Segura',
                "file" : 'files/Segura.pdf'
            },
            {
                "name" : 'Latón Adaptadores y Conexiones',
                "file" : 'files/Adaptadores.pdf'
            },
            {
                "name" : 'Máster Automotriz',
                "file" : 'files/Automotriz.pdf'
            },
            {
                "name" : 'Máster de Bombas de Agua',
                "file" : 'files/Agua.pdf'
            },
            {
                "name" : 'Máster de Mangueras Industriales',
                "file" : 'files/Industriales.pdf'
            },
            {
                "name" : 'Máster de Mangueras PVC-Uretano',
                "file" : 'files/PVC.pdf'
            }
        ]

    },
    {
        "name" : 'Chiaravalli',
        "id" : 'Chiaravalli',
        "image" : 'images/marcas/chiaravalli.png',
        "catologues" : [
            {
                "name" : 'Chiaravalli',
                "file" : 'files/chiaravalli.pdf'
            }
        ]

    },
    {
        "name" : 'Kimberly-Clark',
        "id" : 'Kimberly',
        "image" : 'images/marcas/kimberly.png',
        "catologues" : [
            {
                "name" : 'Kimberly',
                "file" : 'files/Kimberly.pdf'
            }
        ]

    },
    {
        "name" : 'Colson',
        "id" : 'Colson',
        "image" : 'images/marcas/colson.png',
        "catologues" : [
            {
                "name" : 'Colson',
                "file" : 'files/Colson.pdf'
            }
        ]

    },
    {
        "name" : 'Brady',
        "id" : 'Brady',
        "image" : 'images/marcas/brady.png',
        "catologues" : [
            {
                "name" : 'Brady',
                "file" : 'files/Brady.pdf'
            }
        ]

    },
    {
        "name" : 'Diversey',
        "id" : 'Diversey',
        "image" : 'images/marcas/diversey.png',
        "catologues" : [
            {
                "name" : 'Diversey',
                "file" : 'files/Diversey.pdf'
            }
        ]

    },
    {
        "name" : 'Cleco',
        "id" : 'Cleco',
        "image" : 'images/marcas/cleco.png',
        "catologues" : [
            {
                "name" : 'Cleco',
                "file" : 'files/Cleco.pdf'
            }
        ]

    },
    {
        "name" : 'Ashcroft',
        "id" : 'Ashcroft',
        "image" : 'images/marcas/ashcroft.png',
        "catologues" : [
            {
                "name" : 'Ashcroft',
                "file" : 'files/Ashcroft.pdf'
            }
        ]

    },
    {
        "name" : 'Lemus',
        "id" : 'Lemus',
        "image" : 'images/marcas/lemus.svg',
        "catologues" : [
            {
                "name" : 'Lemus',
                "file" : 'files/Lemus.pdf'
            }
        ]

    },
    {
        "name" : 'Tuk',
        "id" : 'Tuk',
        "image" : 'images/marcas/tuk.webp',
        "catologues" : [
            {
                "name" : 'Tuk',
                "file" : 'files/Tuk.pdf'
            }
        ]

    },
    {
        "name" : 'Ruhrpumpen',
        "id" : 'Ruhrpumpen',
        "image" : 'images/marcas/ruhrpumpen.jpg',
        "catologues" : [
            {
                "name" : 'Ruhrpumpen',
                "file" : 'files/ruhrpumpen.pdf'
            }
        ]

    },
    {
        "name" : 'Wera',
        "id" : 'Wera',
        "image" : 'images/marcas/wera.png',
        "catologues" : [
            {
                "name" : 'Wera',
                "file" : 'files/Wera.pdf'
            }
        ]

    },
    {
        "name" : 'Koken',
        "id" : 'Koken',
        "image" : 'images/marcas/koken.png',
        "catologues" : [
            {
                "name" : 'Koken',
                "file" : 'files/Koken.pdf'
            }
        ]

    },
    {
        "name" : 'Universal Tool',
        "id" : 'Universal',
        "image" : 'images/marcas/universal.png',
        "catologues" : [
            {
                "name" : 'Universal Tool',
                "file" : 'files/Universal.pdf'
            }
        ]

    },
    {
        "name" : 'M+A Matting',
        "id" : 'MA',
        "image" : 'images/marcas/MA.png',
        "catologues" : [
            {
                "name" : 'M+A Matting',
                "file" : 'files/MA.pdf'
            }
        ]

    },
    {
        "name" : 'Vargus',
        "id" : 'Vargus',
        "image" : 'images/marcas/vargus.png',
        "catologues" : [
            {
                "name" : 'Vargus',
                "file" : 'files/Vargus.pdf'
            }
        ]

    }
];

const content = document.getElementById('content');

window.onload = ()=>{

    
    for(let i=0; i<data.length; i++){

        const divcolsm3 = document.createElement('div'),
            divcontent = document.createElement('div'),
            image = document.createElement('img'),
            h4 = document.createElement('h4'),
            divspace = document.createElement('div'),
            hr = document.createElement('hr'),
            divdflex = document.createElement('div'),
            divcollapse = document.createElement('div'),
            p = document.createElement('p'),
            ic = document.createElement('i'),
            divcardbody = document.createElement('div'),
            ul = document.createElement('ul');

        divcolsm3.setAttribute('class', 'col-sm-3 mb-3');
        divcontent.setAttribute('class','content');
        image.src = data[i].image;
        image.height = 35;
        h4.innerHTML = data[i].name;
        h4.setAttribute('class', 'mt-3');
        divspace.setAttribute('class','space');
        divdflex.setAttribute('class','d-flex justify-content-between align-items-center');
        p.setAttribute('class','mb-0');
        p.setAttribute('data-toggle','collapse');
        p.setAttribute('href',`#${data[i].id}collapse`);
        p.setAttribute('role','button');
        p.setAttribute('aria-expanded', 'false');
        p.setAttribute('aria-controls',`${data[i].name}collapse`);
        p.innerHTML = 'Ver catálogos';
        ic.setAttribute('class','far fa-file-pdf');
        divcollapse.setAttribute('class','collapse multi-collapse');
        divcollapse.id = data[i].id+'collapse';
        divcardbody.setAttribute('class','card card-body mt-3');

        content.appendChild(divcolsm3);
        divcolsm3.appendChild(divcontent);
        divcontent.appendChild(image);
        divcontent.appendChild(h4);
        divcontent.appendChild(divspace);
        divcontent.appendChild(hr);
        divcontent.appendChild(divdflex);
        divdflex.appendChild(p);
        divdflex.appendChild(ic);
        divcontent.appendChild(divcollapse);
        const catalogues = data[i].catologues;
        divcollapse.appendChild(divcardbody);
        for(let j=0; j<catalogues.length;j++ ){
            li = document.createElement('li');
            link = document.createElement('a');
            li.innerHTML = catalogues[j].name;
            link.setAttribute('href',`${catalogues[j].file}`);
            link.setAttribute('target','_blank');
            link.appendChild(li);
            ul.appendChild(link);
        }
        divcardbody.appendChild(ul);
    }
}