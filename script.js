const form = document.querySelector("form");
const nextButton = form.querySelector(".next-btn");
const backButton = form.querySelector(".back-btn");
const inputAll = form.querySelectorAll(".form.first input");
const container = form.parentElement;

nextButton.addEventListener("click", () => {
  inputAll.forEach((input) => {
    if (input.value != " ") {
      form.classList.add("active");

      container.classList.add("active");
    } else {
      form.classList.remove("active");
      container.classList.remove("active");
    }
  });
});

backButton.addEventListener("click", () => {
  form.classList.remove("active");
  container.classList.remove("active");
});

/// fitur bahasa

// Di dalam file JavaScript
let indonesian = document.getElementById("ina");
let english = document.getElementById("eng");
let korean = document.getElementById("kra");

const languages = {
  en: {
    title: "General Election Registration",
    header: "Registration",
    pilihBahasa: "language",
    INA: "Indonesian",
    ENG: "English",
    KRA: "Korean",
    titleFormPersonal: "Personal Details",
    labelName: "Full Name",
    labelBirth: "Date of Birth",
    labelEmail: "Email",
    labelMobile: "Mobile Number",
    labelGender: "Gender",
    labelOptionGender: "Your Gender",
    labelGenderMale: "Male",
    labelGenderFemale: "Female",
    labelOccupation: "Occupation",
    titleIdentity: "Identity Details",
    labelIDType: "ID Type",
    labelIDNumber: "ID Number",
    labelAuthority: "Issue Authority",
    labelSate: "Issued State",
    labelDate: "Issued Date",
    labelExpiry: "Expiry Date",
    labelButtonNext: "Next",
  },
  id: {
    title: "Pendaftaran Pemilihan Umum",
    header: "Registrasi",
    pilihBahasa: "Bahasa",
    INA: "Indonesia",
    ENG: "Inggris",
    KRA: "Korea",
    titleFormPersonal: "Informasi Pribadi",
    labelName: "Nama Lengkap",
    labelBirth: "Tanggal Lahir",
    labelEmail: "Email",
    labelMobile: "Nomor Handphone",
    labelGender: "Jenis Kelamin",
    labelOptionGender: "Pilih Jenis Kelamin",
    labelGenderMale: "Pria",
    labelGenderFemale: "Wanita",
    labelOccupation: "Pekerjaan",
    titleIdentity: "Detail Identitas",
    labelIDType: "Tipe ID",
    labelIDNumber: "Nomor ID",
    labelAuthority: "Wewenang Penerbitan",
    labelSate: "Negara Bagian yang Diterbitkan",
    labelDate: "Tanggal Terbit",
    labelExpiry: "Kedaluwarsa yang Diterbitkan",
    labelButtonNext: "SELANJUTNYA",
  },
  ko: {
    title: "선거 등록하기",
    header: "등록하기",
    pilihBahasa: "언어",
    INA: "인도네시아",
    ENG: "한국어",
    KRA: "한국",
    titleFormPersonal: "개인 정보",
    labelName: "전체 이름",
    labelBirth: "생년월일",
    labelEmail: "이메일",
    labelMobile: "휴대폰 번호",
    labelGender: "성별입니다.",
    labelOptionGender: "성별 선택하기",
    labelGenderMale: "남성",
    labelGenderFemale: "여성",
    labelOccupation: "채용 정보",
    titleIdentity: "신원 정보",
    labelIDType: "유형 ID",
    labelIDNumber: "ID 번호",
    labelAuthority: "발급 권한",
    labelSate: "상태 발행",
    labelDate: "발행 날짜",
    labelExpiry: "발행된 만료일",
    labelButtonNext: "다음",
  },
};

function translateElements(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent = languages[lang][key];
  });
}

indonesian.addEventListener("click", function () {
  translateElements("id");
});

english.addEventListener("click", function () {
  translateElements("en");
});

korean.addEventListener("click", function () {
  translateElements("ko");
});

// Inisialisasi bahasa awal saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  translateElements("ko");
});
