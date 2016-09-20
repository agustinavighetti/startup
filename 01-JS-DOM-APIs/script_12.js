'use: strict'
    
    function display() {
        var nros = new Array, names = new Array, positions = new Array, options, team;
        options = document.getElementsByName("input");
        team = null;
        for (var i = 0; i < options.length; i++) {
            if(options[i].checked) {
                team=options[i].value;}
        }
        if (team == null) {
            return alert('You must select an option.');
        }
        document.getElementById("left").setAttribute("class","left_after box");
        switch(team) {
            case "Boca Juniors": {
                                    nros = ["1","12","2","3","4","6","18","25","27","5","7","8","11","15","20","22",
                                    "26","29","30","9","10","19"];
            names = ["Sara, Guillermo","Galvan, Bruno Gabriel","Tobio, Fernando Omar","Silva, Jonathan Cristian",
            "Peruzzi, Gino","Magallan, Lisandro","Fabra Palacios, Frank Yusti","Insaurralde, Juan Manuel",
            "Vergini, Santiago","Gago, Fernando Ruben","Pavon, Cristian David","Perez, Pablo Javier",
            "Carrizo, Federico Gaston","Zuqui, Fernando Ruben","Cubas, Adrian Andres","Castellani, Gonzalo Pablo",
            "Centurion, Adrian Ricardo","Jara, Leonardo Rafael","Bentancur Colman, Rodrigo","Benedetto, Dario Ismael",
            "Tevez, Carlos Alberto","Bou, Walter Ariel"];
            positions = ["Goalkeeper","Goalkeeper","Defender","Defender","Defender","Defender","Defender","Defender",
            "Defender","Midfielder","Midfielder","Midfielder","Midfielder","Midfielder","Midfielder","Midfielder",
            "Midfielder","Midfielder","Midfielder","Forward","Forward","Forward"];
                                    showTable(nros,names,positions);
                                    document.getElementById("body").setAttribute("class","body_boca");
            }
                                break;

            case "Newell's Old Boys": {
                                        nros = ["1","12","2","3","6","18","21","22","30","35","5","8","10","11","15",
                                        "16","20","25","31","9","17","26","32"];
            names = ["Pocrnjic, Luciano Dario","Unsain, Luis Ezequiel","Fernandez, Leandro Sebastian",
            "Moiraghi, Nestor Emanuel","Dominguez , Sebastian Enrique","Voboril, German Ariel","Sills, Juan Ignacio",
            "Advincula Castrillon, Luis Jan Piers","Paz, Nehuen Mario","Baez Corradi, Gabriel Alejandro",
            "Mateo , Diego","Prediger, Leonardo Sebastian","Rodriguez , Maximiliano Ruben",
            "Formiliano Duarte", "Fabricio Orosman","Figueroa, Victor Alberto","Amoroso, Emanuel Joel",
            "Isnaldo, Eugenio Horacio","Quignon, Facundo Tomas","Matos, Mauro","Tevez, Mauricio",
            "Fertoli, Hector Hugo","Scocco, Ignacio Martin"];
            positions = ["Goalkeeper","Goalkeeper","Defender","Defender","Defender","Defender","Defender","Defender",
            "Defender","Defender","Midfielder","Midfielder","Midfielder","Midfielder","Midfielder","Midfielder",
            "Midfielder","Midfielder","Midfielder","Forward","Forward","Forward","Forward"];
                                    showTable(nros,names,positions);
                                    document.getElementById("body").setAttribute("class","body_nob");
            }
                                    break;

            case "Rosario Central": {
                                        nros = ["1","21","2","3","4","6","23","25","32","33","5","8","10","11","15",
                                        "16","20","7","9","13","17","19","24","27","28","29"];
            names = ["Sosa, Carlos Sebastian","Rodriguez, Diego Matias","Burgos, Esteban","Menosse Acosta, Hernan",
            "Ferrari, Pablo Andres","Torsiglieri, Marco Natanel","Cetto, Mauro Dario Jesus","Pinola, Horacio Javier",
            "Salazar, Victor Ezequiel","Villagra, Cristian Carlos","Musto, Damian Marcelo","Montoya, Walter Ivan",
            "Lo Celso, Giovani","Fernandez, Jose Luis","Camacho Martinez, Washington Fernando",
            "Martinez, Mauricio Leonel","Colman, Gustavo Alejandro","Bordagaray, Fabian",
            "Ruben Rodriguez, Marco Gaston","Migone, Rodrigo Javier","Herrera, German Gustavo","Delgado, Cesar Fabian",
            "Rodriguez, Ezequiel","Aguirre avalos, Leonel Jonas","Coscia, Agustin","Gutierrez Roncancio, Teofilo Antonio"];
            positions = ["Goalkeeper","Goalkeeper","Defender","Defender","Defender","Defender","Defender","Defender",
            "Defender","Defender","Midfielder","Midfielder","Midfielder","Midfielder","Midfielder","Midfielder",
            "Midfielder","Forward","Forward","Forward","Forward","Forward","Forward","Forward",
            "Forward","Forward"];
                                    showTable(nros,names,positions);
                                    document.getElementById("body").setAttribute("class","body_rc");
            }
                                    break;

            case "River Plate": {
                                    nros = ["1","25","31","2","3","4","6","29","30","5","8","10",
                                    "14","18","20","21","22","23","26","35","7","9","11","13","19"];
            names = ["Batalla, Augusto Martin","  Bologna, Enrique Alberto","Velazco, Ramón Maximiliano",
            "Maidana, Jonatan Ramon","Mina, Arturo Rafael","Moreira, Jorge Luis","Lollo, Luciano",
            "Montiel, Gonzalo Ariel","Olivera, Luis","Domingo, Nicolas Mario","Rodriguez, Denis",
            "Martinez, Gonzalo Nicolas","Arzura, Joaquin","Mayada, Camilo Sebastian","Casco, Milton Oscar",
            "Rossi, Ivan","D'Alessandro , Andres Nicolas","Ponzio, Leonardo Daniel","Fernandez, Ignacio Martin",
            "Andrade, Tomas Gustavo","Mora, Rodrigo Nicanor","Larrondo, Marcelo Alejandro","Driussi, Sebastian",
            "Alario, Lucas Nicolas","Alonso, Ivan Daniel"];
            positions = ["Goalkeeper","Goalkeeper","Goalkeeper","Defender","Defender","Defender","Defender","Defender",
            "Defender","Midfielder","Midfielder","Midfielder","Midfielder","Midfielder","Midfielder","Midfielder",
            "Midfielder","Midfielder","Midfielder","Midfielder","Forward","Forward","Forward","Forward","Forward"];
                                    showTable(nros,names,positions);
                                    document.getElementById("body").setAttribute("class","body_river");
            }
                                break;
        }
    }

    function showTable(nros,names,positions) {

        document.getElementById("right").setAttribute("class","right_show box");

        var table, tr, thNames, thNros, thPositions, thNameNode, thNroNode, thPositions, subtr, tdName, tdYears;
        table = document.createElement("table");
        tr = document.createElement("tr");
        thNros = document.createElement("th");
        thNames = document.createElement("th");
        thPositions = document.createElement("th");
        thNroNode = document.createTextNode("Number");
        thNameNode = document.createTextNode("Name");
        thPositionNode = document.createTextNode("Position");
        thNros.appendChild(thNroNode);
        thNames.appendChild(thNameNode);
        thPositions.appendChild(thPositionNode);
        tr.appendChild(thNros);
        tr.appendChild(thNames);
        tr.appendChild(thPositions);
        table.appendChild(tr);
        table.setAttribute("id","old");
        document.getElementById("table").replaceChild(table,old);

        for (var i = 0; i < names.length; i++) {
            var subtr, tdNro, tdName, tdPosition, nro, year, position;
            subtr = document.createElement("tr");
            tdNro = document.createElement("td");
            tdName = document.createElement("td");
            tdPosition = document.createElement("td");
            nro = document.createTextNode(nros[i]);
            year = document.createTextNode(names[i]);
            position = document.createTextNode(positions[i]);

            tdNro.appendChild(nro);
            tdName.appendChild(year);
            tdPosition.appendChild(position);

            subtr.appendChild(tdNro);
            subtr.appendChild(tdName);
            subtr.appendChild(tdPosition);
            table.appendChild(subtr);
            document.getElementById("table").appendChild(table);

        }

    }