// TODO: 이 곳에 정답 코드를 작성해주세요.

const idInput = document.getElementById('id')
const pwInput = document.getElementById('pw')
const pwCheckInput = document.getElementById('pw-check')
const submit = document.getElementById('submit')
const modal = document.getElementById('modal')
const cancelBtn = document.getElementById('cancel-btn')
const approveBtn = document.getElementById('approve-btn')
const increaseBtn = document.getElementById('increase-font-btn')
const decreaseBtn = document.getElementById('decrease-font-btn')

let fontSize = 16

document.addEventListener('DOMContentLoaded', () => {
    // autofocus
    idInput.focus()
})

idInput.addEventListener('focusout', valId)
pwInput.addEventListener('focusout', valPw)
pwCheckInput.addEventListener('focusout', valPwCheck)

submit.addEventListener('click', (event) => {
    event.preventDefault()
    const trueId = valId()
    const truePw = valPw()
    const truePwCheck = valPwCheck()
    if (trueId && truePw && truePwCheck) {
        const id = document.getElementById('confirm-id')
        const pw = document.getElementById('confirm-pw')
        modal.showModal()
        id.textContent = idInput.value
        pw.textContent = pwInput.value
    }
})

cancelBtn.addEventListener('click', () => {
    modal.close()
})

approveBtn.addEventListener('click', () => {
    window.alert('가입되었습니다 🥳')
    modal.close()
})

increaseBtn.addEventListener('click', (event) => {
    fontSize++
    document.documentElement.style.fontSize = `${fontSize}px`
    if (fontSize !== 12) {
        decreaseBtn.disabled = false
    }
    if (fontSize === 20) {
        event.target.disabled = true
    }
})

decreaseBtn.addEventListener('click', (event) => {
    fontSize--
    document.documentElement.style.fontSize = `${fontSize}px`
    if (fontSize !== 20) {
        increaseBtn.disabled = false
    }
    if (fontSize === 12) {
        event.target.disabled = true
    }
})

// ID 유효성 검사
function valId() {
    const id = idInput.value
    const idMsg = document.getElementById('id-msg')
    const regex = /^[a-z0-9_-]{5,20}$/
    if (!id) {
        idMsg.textContent = '필수 정보입니다.'
    } else if (!regex.test(id)) {
        idMsg.textContent =
            '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.'
    } else {
        idMsg.textContent = ''
        idInput.style.borderColor = 'white'
        return true
    }
    idInput.style.borderColor = 'red'
    return false
}

// 비밀번호 유효성 검사
function valPw() {
    const pw = pwInput.value
    const pwMsg = document.getElementById('pw-msg')
    const regex = /^[A-z0-9]{8,16}$/
    if (!pw) {
        pwMsg.textContent = '필수 정보입니다.'
    } else if (!regex.test(pw)) {
        pwMsg.textContent = '8~16자 영문 대 소문자, 숫자를 사용하세요.'
    } else {
        pwMsg.textContent = ''
        pwInput.style.borderColor = 'white'
        return true
    }
    pwInput.style.borderColor = 'red'
    return false
}

// 비밀번호 확인 유효성 검사
function valPwCheck() {
    const pwCheck = pwCheckInput.value
    const pwCheckMsg = document.getElementById('pw-check-msg')
    if (!pwCheck) {
        pwCheckMsg.textContent = '필수 정보입니다.'
    } else if (pwCheck !== pwInput.value) {
        pwCheckMsg.textContent = '비밀번호가 일치하지 않습니다.'
    } else {
        pwCheckMsg.textContent = ''
        pwCheckInput.style.borderColor = 'white'
        return true
    }
    pwCheckInput.style.borderColor = 'red'
    return false
}
