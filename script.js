let selectedGrade = "";
let selectedRoom = "";

function selectGrade(grade){
    selectedGrade = grade;
    updateSchedule();
}

function selectRoom(room){
    selectedRoom = room;
    updateSchedule();
}

function updateSchedule(){

    if(selectedGrade === "" || selectedRoom === ""){
        return;
    }

    const schedules = {
        m4: {
            1: "https://i.ibb.co/ymkCqYNm/4-1.jpg",
            2: "https://i.ibb.co/2YLTxSWp/4-2.jpg",
            3:
"https://i.ibb.co/YFhprgB4/4-3.jpg",
            4:
"https://i.ibb.co/Y4QQgBHZ/4-4.jpg",
            5:
"https://i.ibb.co/WNFgJxpt/4-5.jpg",
            6:
"https://i.ibb.co/C3fP7mP8/4-6.jpg",
            7:
"https://i.ibb.co/fVwCTTdB/4-7.jpg",
            8:
"https://i.ibb.co/Dgg85TWk/4-8.jpg",
            9:
"https://i.ibb.co/wZ0TsPPq/4-9.jpg",
            10:
"https://i.ibb.co/60gNM1Pr/4-10.jpg",
        },

        m5: {
            1: "https://i.ibb.co/Y4MFxSMM/5-1.jpg",
            2: "https://i.ibb.co/tMmR6tV4/5-2.jpg",
            3:
"https://i.ibb.co/whTndJL9/5-3.jpg",
            4:
"https://i.ibb.co/XfWzqSdZ/5-4.jpg",
            5:
"https://i.ibb.co/nNv2VWWB/5-5.jpg",
            6:
"https://i.ibb.co/TMfWc6q1/5-6.jpg",
            7:
"https://i.ibb.co/TM48ZRvm/5-7.jpg",
            8:
"https://i.ibb.co/FbDB14n0/5-8.jpg",
            9:
"https://i.ibb.co/SXqgqkS2/5-9.jpg",
            10:
"https://i.ibb.co/5QwbXBq/5-10.jpg",
        },

        m6: {
            1: "https://i.ibb.co/zWvH6Y2M/6-1.jpg",
            2: "https://i.ibb.co/23HZzHp6/6-2.jpg",
            3:
"https://i.ibb.co/xtXPTTFM/6-3.jpg",
            4:
"https://i.ibb.co/B2QZk4tc/6-4.jpg",
            5:
"https://i.ibb.co/MDZL59R3/6-5.jpg",
            6:
"https://i.ibb.co/r26V7jNt/6-6.jpg",
            7:
"https://i.ibb.co/bM4H5Njq/6-7.jpg",
            8:
"https://i.ibb.co/fVy3pQqL/6-8.jpg",
            9:
"https://i.ibb.co/GfKRZyxJ/6-9.jpg",
            10:
"https://i.ibb.co/RGSL7bWr/6-10.jpg",
        }
    };

    const imagePath = schedules[selectedGrade][selectedRoom];

    const image = document.getElementById("scheduleImage");

    image.src = imagePath;
    image.style.display = "block";

    document.getElementById("message").innerText =
        `ม.${selectedGrade.substring(1)} ห้อง ${selectedRoom}`;
}