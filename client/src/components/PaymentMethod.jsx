import React, { useState } from 'react';

const PaymentMethod = ({ onChange }) => {

    const [method, setMethod] = useState('card');
    const [cardData, setCardData] = useState({
        number: '',
        expiry: '',
        cvv: '',
    });

    const handleMethodChange = (e) => {
        const value = e.target.value;
        setMethod(value);
        if (value === 'cash') {
        onChange({ method: value, card: null });
        } else {
        onChange({ method: value, card: cardData });
        }
    };

    const handleCardChange = (field, value) => {
        let updatedValue = value;
      
        if (field === 'number') {
          // Удаляем все нецифровые символы
          const digits = value.replace(/\D/g, '');
      
          // Форматируем визуально: вставляем пробелы после каждых 4 цифр
          updatedValue = digits
            .match(/.{1,4}/g)  // разбиваем по 4 символа
            ?.join(' ')        // объединяем с пробелами
            .slice(0, 19) || ''; // ограничиваем до 19 символов с пробелами
        }
      
        if (field === 'expiry') {
          const digits = value.replace(/\D/g, '');
          if (digits.length === 0) {
            updatedValue = '';
          } else if (digits.length <= 2) {
            updatedValue = digits;
          } else {
            updatedValue = digits.slice(0, 2) + '/' + digits.slice(2, 4);
          }
        }
      
        const updatedCard = {
          ...cardData,
          [field]: updatedValue
        };
      
        // Передаём значение **без пробелов**, если это номер карты
        const cleanCard = {
          ...updatedCard,
          number: updatedCard.number.replace(/\s/g, '')  // чистый номер для бэкенда
        };
      
        setCardData(updatedCard);
        onChange({ method, card: cleanCard });
    };

  return (
    <div className="payment-method">
      <h2>Способ оплаты</h2>
      <div className="payment__variant">
        <label>
          <input
            type="radio"
            value="card"
            checked={method === 'card'}
            onChange={handleMethodChange}
          />
          Банковская карта
        </label>

        <label>
          <input
            type="radio"
            value="cash"
            checked={method === 'cash'}
            onChange={handleMethodChange}
          />
          Наличными при получении
        </label>
      </div>

      {method === 'card' && (
        <div className="card-fields">
          <div className="form-item">
            <label>
              Номер карты
              <input
                type="text"
                maxLength="19"
                placeholder="0000 0000 0000 0000"
                value={cardData.number}
                onChange={(e) => handleCardChange('number', e.target.value)}
              />
            </label>
          </div>
          <div className="form-item">
            <label>
              Срок действия
              <input
                type="text"
                placeholder="MM/YY"
                maxLength="5"
                value={cardData.expiry}
                onChange={(e) => handleCardChange('expiry', e.target.value)}
              />
            </label>
          </div>
          <div className="form-item">
            <label>
              CVV
              <input
                type="text"
                maxLength="3"
                placeholder="CVV"
                value={cardData.cvv}
                onChange={(e) => handleCardChange('cvv', e.target.value)}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
