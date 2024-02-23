const tbody = document.tbody;

// 방명록 등록
// POST /visitor
function createVisitor() {
  const form = document.forms["visitor-form"];
  console.log(form);

  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록 모두를 기입해주세용");
    return;
  }
  if (form.name.value.length > 6) {
    alert("이름은 6글자 이하로 작성해주세용");
    return;
  }

  axios({
    method: "POST",
    url: "/visitor",
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((response) => {
    console.log(response.data);
    const { data } = response;
    const html = `
    <tr>
        <td>${data.id}<td>
        <td>${data.name}<td>
        <td>${data.comment}<td>
        <td><button type="button" onclick="editVisitor('<%=data[i].id%>')">
        수정
      </button><td>
        <td><button
        type="button"
        onclick="deleteVisitor(this,'<%=data[i].id%>')"
      >
        삭제
      </button><td>
    <tr>
    `;
  });
}

// 방명록 삭제
// DELETE /visitor
function deleteVisitor(btn, id) {
  console.log(btn);
  console.log(id);

  axios({
    method: "delete",
    url: "/visitor",
    data: { id: id },
  }).then((res) => console.log(res.data));
  alert(res.data);

  btn.parentElement.remove();
}

// 방명록 수정
// EDIT /visitor
function editVisitor(id) {}
