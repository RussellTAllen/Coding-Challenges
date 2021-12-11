const testBoards = "22 13 17 11  0\n8  2 23  4 24\n21  9 14 16  7\n6 10  3 18  5\n1 12 20 15 19\n\n3 15  0  2 22\n9 18 13 17  5\n19  8  7 25 23\n20 11 10 24  4\n14 21 16 12  6\n\n14 21 17 24  4\n10 16 15  9 19\n18  8 23 26 20\n22 11 13  6  5\n2  0 12  3  7"
const testNums = "7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1"
const testColWin = "14,2,18,22,10"

const nums = "91,17,64,45,8,13,47,19,52,68,63,76,82,44,28,56,37,2,78,48,32,58,72,53,9,85,77,89,36,22,49,86,51,99,6,92,80,87,7,25,31,66,84,4,98,67,46,61,59,79,0,3,38,27,23,95,20,35,14,30,26,33,42,93,12,57,11,54,50,75,90,41,88,96,40,81,24,94,18,39,70,34,21,55,5,29,71,83,1,60,74,69,10,62,43,73,97,65,15,16"
const boards = '83 40 67 98  4\n50 74 31 30  3\n75 64 79 61  5\n12 59 26 25 72\n36 33 18 54 10\n\n68 56 28 57 12\n78 66 20 85 51\n35 23  7 99 44\n86 37  8 45 49\n40 77 32  6 88\n\n75 15 20 79  8\n81 69 54 33 28\n 9 53 48 95 27\n65 84 40 71 36\n13 31  6 68 29\n\n94  6 30 16 74\n91 47 66 31 90\n14 56 45 55 20\n58 70 27 46 73\n77 67 97 51 54\n\n60 12 49 80 52\n15 27 85 82 48\n21 76 83 55 54\n 8  5  4 38 47\n73  2 86 44 99\n\n64 60  6 38 37\n 3 69 21 24 11\n36 88 16 55 41\n78  7 81 95 91\n27 34 92 39 30\n\n38 57 20 68 49\n21 18 69 97 60\n34 92  0 59 62\n10 43 93 87 64\n53 35 94 76 61\n\n48 74 58 13 54\n57 18 37 92 78\n89 10 25 97 43\n38 99 64  6 66\n21 83 29 93 95\n\n94 37 98 87 51\n50 65 77 83 95\n68  4 91 53 32\n56 26 15  2 80\n20 55 58 81 33\n\n73 32 66 38 89\n18 79 40 78 55\n26 63 93 60 98\n42 65 96 47 57\n45 75 72 23 35\n\n64 28 21 80 27\n93 58 71 67 11\n61 20 74 13 90\n76 35 46 94 40\n92  2  4 85 69\n\n22 70 87 31 61\n74 78 58  4 90\n63 28 24 35 84\n59  8 89 88 47\n17 48 80 33 32\n\n57  7 30 39 19\n 1 13 41 15 50\n44 72  2  5 70\n34 93 60 80 69\n49 14 25 10 33\n\n45 41 77 89 27\n68 99 11 32 95\n15  4 72 98 52\n53 28 14 75 44\n57  9 62 92 69\n\n 7 21  2 73 40\n52 60 57 53 65\n63 86 36 82 44\n14 28 39 12 80\n66 64 91 50 51\n\n82  5 38 41 95\n70 52 11 21 51\n81 20  0 14 83\n57 36 60 59 42\n77 13 85 32 63\n\n91 40 42  3 50\n22 24 81 31 93\n 9 79 82 43 89\n 6 77 76 26 37\n29  8 53 23  4\n\n 7 78 32 44 74\n29  3 84 38 79\n58 41 87 88 30\n68 19 72 81 47\n15 63 52  6 26\n\n20 41 92 84 25\n 9  4 96 85 66\n49 15 50 89 19\n48 45 82 86 60\n29 18 53 47 16\n\n75 39 45 31 73\n91 86 69 94 66\n28 61 17 20  0\n88 21 89 41 37\n35  2 10 18 82\n\n80 23  4 73 93\n89  8 20 12 45\n74 99 58 90 67\n50 85 35 88 55\n18 65 42 47 48\n\n16 38 65 64 25\n20 74 37 15 82\n23 76 97 48 53\n60 93 85  1 35\n77 10 59  2 58\n\n11  9 57 40 46\n35 88 29 52 17\n30  2  7  6  0\n13 63 44 68 59\n83 98  5 50 65\n\n82 40  2 14 50\n 7 31 91 19 11\n51 42 56 44  6\n66 74 22 95 64\n63  1 17 86 24\n\n18 19 66 63 80\n65 23 74 22 85\n 5  7 37 75 51\n38 58 68 83 32\n40 29 31 15 43\n\n37 54 13 77 31\n57 96 28 87 95\n10 11 19 49 45\n12 21 79 56 24\n34 64 84 69 17\n\n 6 33 48 61  0\n85 34  7 84 37\n25 46 59 76 82\n18 62 20 44  2\n12 78 60 56 99\n\n95  6  1 39  2\n46 34 28 64 22\n48 23 89 56 55\n44 81 82 43 74\n65 31 94 49 91\n\n69 42 27 52 54\n79 60 62 83 38\n 5 21 56 48 99\n51 40 15  7 24\n92 10 66 64 88\n\n99 18 22 52 81\n21 42 13 71 59\n91 38 68 10 25\n54 19 76 60 24\n41 92  2  3 64\n\n76  5 25 55 84\n70 15 89 67 68\n34 86 11  4  6\n 9 23 43 41 52\n58 10 88 38  0\n\n83 91 85 81 86\n 5 10 89  6 48\n45 77  2  9 90\n74  8 57 75 67\n73 30 49 96 15\n\n66 13 82 89 20\n 5 67 94 64  0\n58 73  4 62 49\n59 28 75 79 44\n54 71 57 33 36\n\n23 36 29 80 30\n51 91 77  2 84\n78 90 15 21 75\n28 93 22 55 16\n67 50 58 60 68\n\n82 80 37 91  7\n54 81 85 25 24\n33 36 89 30 56\n83 95 99 48 10\n 4 44  1 55 79\n\n 9 13 53 20 26\n 7 31 49 84 58\n51 91 90 68 55\n19 38 23 81 33\n34 99 85 37 54\n\n44 66 81 78 15\n31 14 48 65  0\n26 10 20  4 41\n77 68 95 34 73\n74 12 36  3 60\n\n 6 24 78 58 36\n30 51 75 13 40\n17  1  3 42 59\n64 20  4 18 79\n37 61 84 63  7\n\n41 83  1 75 18\n14 56 67 32 22\n69 80 46 84 49\n72 21  9 10 35\n 4 37 28 40 12\n\n56 80 47 17 70\n12 22 77 81 11\n61 30 58 60 71\n52  0 25 86 65\n59 28 79 20 26\n\n70 75 81 18 67\n 2 85 73  8 17\n74  3 34 92 30\n51 72 84 56 45\n37 90 31 97 78\n\n 2 73 71 43 69\n 6 54 89 57 93\n81  0 39 25 90\n79 27 92 29 15\n45 76 87 11 91\n\n98 35 51 49 34\n23 12 77 27 82\n 6 89  0 76 46\n81 48 99 45 90\n10 75 17 96 29\n\n45 19 82 93  0\n84 24 73  2 98\n94 46  7 48 56\n80 34  5 18 31\n58 33 83 29 55\n\n66 81 99 54 63\n21 94 72 77 64\n58 52 85 46 68\n 5  6 78 42  4\n76 38 51 24 33\n\n93 26  5 59 67\n13 84 76  4 69\n 0 17 30 83 48\n 8 53 32 14 92\n94 18 66 46 61\n\n28 48 38  6 25\n70 39 71 77 22\n66 94 18 43 36\n30 67 57  9 90\n15 34 50  3 86\n\n11 90 99 92 87\n78 79 56 21 50\n19 18 22 20 30\n95 41 59 85 26\n66 58 46 38 57\n\n49 92  2 93 77\n46 89 44 57 19\n53  8 32 18 88\n54 95 59 70 10\n72 84 86 42 81\n\n44 78 25  4 57\n72  7 42 94  8\n61 79 11 29 59\n22 82  6 90 12\n98 77  5 68 50\n\n48 41 64 15 57\n76  7 52 53 93\n70 84 94 38 35\n47 18 13 51 21\n77 62 63  3 65\n\n31 33 48 79 69\n30  9 83 53 50\n60 94 36  2 28\n59 19 10  5 40\n26 41 72 14 96\n\n 0 16 49 75 17\n28 20 21 99 94\n15  8  4 68 71\n23 53 76 19 74\n79 61 72 70 52\n\n70 89 12 80 76\n14 18 16  4 91\n34 64 43 51 71\n 6 78 30  5 13\n57 42 15 73 24\n\n64 99 72 41 54\n21 29 25 40  9\n92 48 82 70 98\n65 62  8 78 27\n71 86 36 34 23\n\n23 19 72 77 63\n85  0 61 40 14\n69 76 18 56 95\n68 66 28 79 13\n83 84 45 89  2\n\n18 40 28 70 37\n80 30 67 96 34\n77 25 97 32 11\n48 46 89 14 29\n 2  8 95  0 12\n\n 0 26  1  9 30\n17  2 78 18 65\n84  7 61 93 81\n80 44 82 23 99\n72 95 19 60 28\n\n37 39  0 20 21\n91 36 93 16 22\n53 95 26 72 25\n97 33 60 55 65\n79 56 73 29 75\n\n22 58 99 57 28\n 2 56 93 91 18\n44 64 92 85 46\n70 47 89 27 54\n83  5 48 97 72\n\n72  1 73 68 36\n31  8 14 41 35\n23 96  7 92 83\n56 39 77 93 91\n20 28 67 10 11\n\n62 27 17 54  0\n35 60 73 20  5\n23 58 46 99 75\n19 53 79 70 88\n31 85 77  1 32\n\n22 90 81 42 55\n70 78 86 19 94\n 1 43 15 33 51\n84 96 87 58  6\n49 64  4 59 23\n\n82 63 58 75 89\n35 37 52 80 24\n93 50 76 79  1\n86 59 30 92  7\n42 11 55 70 22\n\n83  3 71 28 95\n70 23 68 57  1\n60  6 19 63 32\n64 55 97 81 49\n91 80 88  5 35\n\n23 68 51 62 20\n70 52 98 34 41\n12 21 85 43 84\n69 49 36 28  0\n76 30 58 91 60\n\n30 72  6 41 43\n67 79 46 96 99\n58 71 39 87 69\n17 18 11 57 25\n45 75 16 33 42\n\n22 75 24 74 90\n34 70 44 86 23\n29 59 68  4 48\n88 45 92 27 49\n47 77 26 99 82\n\n42 29 21 74 33\n64 37 38 50 84\n46 44 41  1 67\n53 66 96 68 59\n 6 94 11 31 99\n\n24 32 71 87 57\n42 26 55 80 99\n82 27 16 19 92\n96 48 62 31 61\n60 89 95 18  6\n\n99 33 55 71 29\n75 37 23 27 98\n 2 78 90 18 35\n59 10 56  0  6\n12 19 76 70 96\n\n33 37 23 61 80\n 6 13 68 51 76\n92 25  3 95 55\n99 63 17 52 30\n11 94 42  5 98\n\n77 37 25 14 73\n95 90 10 19 72\n78 30 44 47 91\n 3 60 32  5 66\n21 55 87 98  6\n\n 6 60 82 90 98\n21 70 54 66 27\n37 64 55 10 14\n57 25 84 50 20\n42 59 85  3 73\n\n74 84 92 10 51\n57 82 93 90 44\n41 43 76 48 59\n79 49 69 16 72\n37 29 63 15 68\n\n37 90 97 86 18\n 2 83 30 53 92\n45 35 78 47 40\n67 61 17 14 84\n32 33 81 10 11\n\n46 48 39  3 50\n83 29 91 73 67\n25 43 89 71 36\n63 62 78 95 18\n82 34 23 85 11\n\n19 68 80 50 13\n 1 45 51 27 39\n98 26 24 46 49\n14 92 63 88 66\n15 44 84 47 94\n\n19 39 93 43 86\n91 58  3 69 41\n18 36 95 52 83\n12  6 22 48  0\n25 70 40 88 73\n\n95 11 94 13 14\n64 87 57 98 49\n47 88 84 61  2\n46 21 15 74 59\n82 73 78  3 51\n\n18 72 29  7 36\n96 67 81 78 23\n43 40 44 47 98\n41 26 15 90 71\n42 62 93 70  2\n\n17  8 59 25 33\n81 47 55 99 48\n86 14 71 54 50\n90 11 23 18  0\n97 65 82 68 42\n\n50 54 68 90 83\n10 28 77 55 61\n38 60 52 80 44\n40 81 14 24 87\n51 82 42 30  8\n\n54  5 64 22 60\n70 19 83 11 45\n46 39  2 56  6\n61  8 28 20 94\n 0  4 81 34 84\n\n96 21 48 89 15\n91 40  9 97 65\n26 58 10 18 78\n98 79 29 80 28\n17 59 43 84 99\n\n67 73 21  9 31\n68 37 26 65 84\n63 24 42 27 40\n61 25 30 34 35\n53 23 48 81 29\n\n24 34  5 67 62\n89 85 68 37 78\n42 87 13 49 41\n74 55 70 86 76\n73 94 97 63 48\n\n88 24  6 75 30\n77 64 16 34 93\n36 76  0 40 81\n67 14 89 84 95\n32 19 18 66  9\n\n97 71 65 30 69\n41 21 40 31 33\n50 55 35 52 53\n 4 51 13 81 72\n12 83 14 64 18\n\n97  7  8 74 10\n 3 92 31 25 41\n20 32 45 72 55\n 1 43 49 98 27\n99 54 57 13 76\n\n86 81 67  6 97\n34 18 96 43 56\n59 75 17 26  9\n 0 38 60 94 14\n 4 55 64 61 88\n\n37 15 48 43 66\n45 54 90 81 47\n63 64 28 82 93\n34 52  6 99 61\n49 12 71 23 46\n\n90 87 89 97  1\n48  0 82 60 43\n55 30 68 25 83\n78  3 23 16 66\n98  2 19 63 17\n\n89 52 49 14 38\n69 12 50 17 90\n58 53 26 20 29\n39 65 43  7  5\n84 68 94 85 25\n\n95 25 42 36 47\n50 54 83 84 37\n94 70 99 79 18\n57  8 69 52 31\n66 20 35 71 38\n\n81 18 47 68 15\n 3 50 16 83 37\n34 31  9 57 76\n74 95 40 63 48\n13 28 20 43 66\n\n52 21 62 41 67\n22 56 36 18 23\n59 44 27 73  3\n72 50 19 33 76\n45 55 70 46 92\n\n72 96 50 83 68\n31 78 59 57 93\n43 58 17 52 35\n87 34 91 76  0\n54 75 53 25 62\n\n21 53 68  5 80\n47 67  6 81  9\n64 46 35 26 39\n50 24 84 45 71\n66 15 83  3 97\n\n22 97 31 90 63\n21 51 38 74 78\n10 64 92 82  1\n70 12 75 16 14\n68 50 35 73 26\n'


function formatBoards(boards){
    boards = boards.split('\n\n')
    const boardsArr = []

    boards.forEach(board => {
        board = board.split('\n')
        let formattedBoard = board.map(row => {
            row = row.replaceAll('  ', ' ')
            return row.split(' ')
        })

        formattedBoard = formattedBoard.map(row => row.filter(num => num))
        boardsArr.push(formattedBoard)
    })

    return boardsArr
}