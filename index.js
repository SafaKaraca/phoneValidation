const validatePhoneNumber = (phoneNumber) => {
    
    //İki rakam arasında bırakılan boşlukları temizleyen regex
    const cleanedPhoneNumber = phoneNumber.replace(/\s/g, '')
    //İlk iki karakterin 0 ve 5, geri kalanların rakam ve toplam 11 karakter olduğunu kontrol eden regex
    const phoneRegex = /^05[0-9]{9}$/
  
    if (phoneRegex.test(cleanedPhoneNumber)) {
      return {valid: true, message: 'Telefon numarası geçerli.' }
    } else {
      return { valid: false, message: 'Geçersiz telefon numarası. Lütfen telefon numaranızı 05********* şeklinde giriniz.' }
    }
  }
  
  module.exports = validatePhoneNumber
