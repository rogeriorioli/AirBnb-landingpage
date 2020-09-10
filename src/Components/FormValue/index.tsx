import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { data } from './data'
import * as S from './styles';

const FormValue = () => {
  const [diary , setDiary] = useState<number>(0);
  const [cityValue, setCityValue] = useState<number>(0);
  const [valueDays, setValuesDays]= useState<number>(0);


const handleValue = (e :any) => {
      e.persist();
      setDiary(e.target.value)
}

const handleCityValue = (e :any) => {
    e.persist();
    setCityValue(cityValue =>  cityValue = e.target.value)
}

useEffect(() => {
    setValuesDays(diary * cityValue)
}, [cityValue, diary])



  return (
      <S.FormContainer>
          <h1>Ganhe dinheiro como anfitrião do Airbnb</h1>
          <form>
            <fieldset>
              <label>Tenho uma quarto em:</label>
              <select onChange={handleCityValue}>
                <option value={0}>Selecione a sua Cidade</option>
                {data.map(city => <option key={city.id} value={city.value}>{city.city}</option>)}
              </select>
            </fieldset>
            <fieldset>
            <label>Quero alugar por: {!diary ? 0 : diary } dias </label>
              <input type="text" placeholder="ex: 30" onChange={handleValue} maxLength={2}/>
            </fieldset>
            <div className="value">
                <div className="value-total">
                    R$ {valueDays.toFixed(2)}
                </div>
                <div className="value-city">
                   <span>Media de </span>
                   {!cityValue ? `R$ 00.00` : 
                    `R$ ${cityValue}.00 /dia`
                    }
                </div>
            </div>
            <Button label="Começe Já" background="#FF5A5F"/>
          </form>
      </S.FormContainer>
  );
}

export default FormValue;