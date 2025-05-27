import React, { useState } from 'react';

const DeliveryMethod = ({ onChange }) => {
  const [method, setMethod] = useState('courier');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const [pickupComment, setPickupComment] = useState('');

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
    onChange({
      method: e.target.value,
      address: '',
      comment: '',
      pickupComment: '',
    });
  };

  const handleFieldsChange = (type, value) => {
    if (method === 'courier') {
      if (type === 'address') setAddress(value);
      if (type === 'comment') setComment(value);
      onChange({
        method,
        address: type === 'address' ? value : address,
        comment: type === 'comment' ? value : comment,
        pickupComment: '',
      });
    } else {
      setPickupComment(value);
      onChange({
        method,
        address: '',
        comment: '',
        pickupComment: value,
      });
    }
  };

  return (
    <div className="delivery-method">
      <h2>Доставка</h2>
      <div className="delivery__variant">
        <label>
          <input
            type="radio"
            value="courier"
            checked={method === 'courier'}
            onChange={handleMethodChange}
          />
          Курьерская доставка — 1 500 ₽
        </label>

        <label>
          <input
            type="radio"
            value="pickup"
            checked={method === 'pickup'}
            onChange={handleMethodChange}
          />
          Самовывоз — бесплатно
        </label>
      </div>

      <div className="delivery-fields">
        {method === 'courier' && (
          <>
            <div className="form-item">
              <label>
                <span>Улица, дом, квартира *</span>
                <textarea
                  value={address}
                  onChange={(e) => handleFieldsChange('address', e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-item">
              <label>
                <span>Комментарий для курьера</span>
                <textarea
                  value={comment}
                  onChange={(e) => handleFieldsChange('comment', e.target.value)}
                />
              </label>
            </div>
          </>
        )}

        {method === 'pickup' && (
          <div className="form-item">
            <label>
              <span>Дополнительный комментарий</span>
              <textarea
                value={pickupComment}
                onChange={(e) => handleFieldsChange('pickupComment', e.target.value)}
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryMethod;
