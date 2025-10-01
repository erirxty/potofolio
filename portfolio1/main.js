// 変更なし
function enterShop() {
  const norenSection = document.getElementById("noren");
  const mainContent = document.getElementById("mainContent");

  norenSection.style.transform = "translateY(-100vh)";
  norenSection.style.transition = "transform 1s ease-in-out";

  setTimeout(() => {
    mainContent.classList.add("show");
  }, 500);
}

// ⚠️ 作品詳細のコンテンツ表示方法を大幅に変更
function showWork(type) {
  const modal = document.getElementById("workModal");
  const modalBody = document.getElementById("modalBody");

  // 1. 表示するコンテンツの元となるHTML要素のIDを決定 (例: 'dental' -> 'dental-content')
  const contentId = type + "-content";
  const sourceElement = document.getElementById(contentId);

  if (!sourceElement) {
    console.error("指定されたIDのコンテンツが見つかりません: " + contentId);
    return;
  }

  // 2. modalBody の中身を空にする
  modalBody.innerHTML = "";

  // 3. 元の要素を複製し、モーダルに挿入する
  // cloneNode(true) で、子要素（中のh2やpなど）も含めて完全にコピーします
  const clonedContent = sourceElement.cloneNode(true);

  // 4. コピーした要素の style="display: none;" を削除して表示可能にする
  clonedContent.removeAttribute("style");
  clonedContent.classList.remove("work-detail-template"); // 必要に応じてクラスも削除

  // 5. モーダルの本体に追加
  modalBody.appendChild(clonedContent);

  // 6. モーダル全体を表示
  modal.style.display = "block";

  // グラフィックデザインのスライダーを初期状態に戻す処理を追加
  if (type === "design") {
    // スライダーの再初期化。design-contentが再挿入されたので、もう一度要素を取得して初期化します
    currentDesignSlide = 1;
    // DOM更新後すぐに showDesignSlide を呼ぶため、setTimeoutを使うとより安全です
    setTimeout(() => {
      showDesignSlide(1);
    }, 0);
  }

  // 歯科医院サイトの場合、デバイス切り替えをPC版に初期化（HTMLの active クラスが効くはずですが念のため）
  if (type === "dental") {
    setTimeout(() => {
      switchDevice("pc");
    }, 0);
  }
}

// 変更なし
function closeModal() {
  document.getElementById("workModal").style.display = "none";
}

// 変更なし
window.onclick = function (event) {
  const modal = document.getElementById("workModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// 変更なし
function switchDevice(device) {
  // modalBody の中の要素を取得するように変更
  const modalBody = document.getElementById("modalBody");
  const tabs = modalBody.querySelectorAll(".device-tab");
  const pcPreview = modalBody.querySelector("#pc-preview");
  const mobilePreview = modalBody.querySelector("#mobile-preview");

  // 要素がモーダル内に存在しない場合は処理を終了
  if (!pcPreview || !mobilePreview) return;

  tabs.forEach((tab) => tab.classList.remove("active"));

  if (device === "pc") {
    tabs[0].classList.add("active");
    pcPreview.style.display = "block";
    mobilePreview.style.display = "none";
  } else {
    tabs[1].classList.add("active");
    pcPreview.style.display = "none";
    mobilePreview.style.display = "block";
  }
}

let currentDesignSlide = 1;

// 変更なし
function changeDesignSlide(n) {
  showDesignSlide((currentDesignSlide += n));
}

// スライド要素の取得元を modalBody 内に変更
function showDesignSlide(n) {
  const modalBody = document.getElementById("modalBody");
  const slides = modalBody.querySelectorAll(".design-slide");
  const dots = modalBody.querySelectorAll(".slider-dot");

  // スライド要素が見つからない場合は処理を終了
  if (slides.length === 0) return;

  if (n > slides.length) {
    currentDesignSlide = 1;
  }
  if (n < 1) {
    currentDesignSlide = slides.length;
  }

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[currentDesignSlide - 1].classList.add("active");
  dots[currentDesignSlide - 1].classList.add("active");
}

// 変更なし
function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  alert(
    "お問い合わせありがとうございます！\n\nお名前: " +
      name +
      "\nメール: " +
      email
  );

  document.querySelector("form").reset();
}
