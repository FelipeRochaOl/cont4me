import { SelectItem } from '../Page/Form/SelectItem'
import { SelectRadix } from '../Page/Form/SelectRadix'
import { Title } from '../Page/Title'
import {
  CalendarBillContainer,
  CalendarBillContent, CalendarBillTable
} from './styles'
import { SummaryCell } from './SummaryCell'

export const CalendarBill = () => {
  return (
    <CalendarBillContainer>
      <Title paginate={{ initialPage: 1, endPage: 10 }}>
        <h1>Carteira</h1>
      </Title>
      <CalendarBillContent>
        <CalendarBillTable>
          <thead>
            <tr className="topTableBill">
              <th colSpan={2}>
                <SelectRadix
                  id="year"
                  label="Ano"
                  defaultValue="2022"
                  iconSize={10}
                >
                  <SelectItem value="2022" iconSize={10}>
                    2022
                  </SelectItem>
                  <SelectItem value="2021" iconSize={10}>
                    2021
                  </SelectItem>
                </SelectRadix>
              </th>
              <th colSpan={2}>
                Saldo Anterior (R$): <span>20.000,00</span>
              </th>
            </tr>
            <tr className="titleTableBill">
              <th>Meses</th>
              <th>
                <span>
                  Recebido
                  <small>/provisão a receber</small>
                </span>
              </th>
              <th>
                <span>
                  Pago
                  <small>/provisão a pagar</small>
                </span>
              </th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Janeiro</td>
              <td>
                <SummaryCell
                  balance={{ integer: '3.000' }}
                  provision="3000,00"
                  type="income"
                />
              </td>
              <td>
                <SummaryCell
                  balance={{ integer: '3.757', cents: '65' }}
                  provision="3.757,65"
                  type="paid"
                />
              </td>
              <td>
                <summary>
                  <span>
                    19.242,<sub>35</sub>
                  </span>
                </summary>
              </td>
            </tr>
            <tr>
              <td>Fevereiro</td>
              <td>
                <summary>
                  <span>
                    1.000,<sub>00</sub>
                  </span>
                  <small>/de 3.000,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    3.757,<sub>65</sub>
                  </span>
                  <small>/de 7.957,33</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    20.242,<sub>35</sub>
                  </span>
                </summary>
              </td>
            </tr>
            <tr>
              <td>Março</td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    20.242,<sub>35</sub>
                  </span>
                </summary>
              </td>
            </tr>
            <tr>
              <td>Abril</td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    20.242,<sub>35</sub>
                  </span>
                </summary>
              </td>
            </tr>
            <tr>
              <td>Maio</td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    20.242,<sub>35</sub>
                  </span>
                </summary>
              </td>
            </tr>
            <tr>
              <td>Junho</td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    20.242,<sub>35</sub>
                  </span>
                </summary>
              </td>
            </tr>
            <tr>
              <td>Julho</td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    20.242,<sub>35</sub>
                  </span>
                </summary>
              </td>
            </tr>
            <tr>
              <td>Agosto</td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    20.242,<sub>35</sub>
                  </span>
                </summary>
              </td>
            </tr>
            <tr>
              <td>Setembro</td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    20.242,<sub>35</sub>
                  </span>
                </summary>
              </td>
            </tr>
            <tr>
              <td>Outubro</td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    20.242,<sub>35</sub>
                  </span>
                </summary>
              </td>
            </tr>
            <tr>
              <td>Novembro</td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    20.242,<sub>35</sub>
                  </span>
                </summary>
              </td>
            </tr>
            <tr>
              <td>Dezembro</td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    0,<sub>00</sub>
                  </span>
                  <small>/de 0,00</small>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    20.242,<sub>35</sub>
                  </span>
                </summary>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Saldo</td>
              <td>
                <summary>
                  <span>
                    4.000,<sub>00</sub>
                  </span>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    3.757,<sub>65</sub>
                  </span>
                </summary>
              </td>
              <td>
                <summary>
                  <span>
                    19.242,<sub>35</sub>
                  </span>
                </summary>
              </td>
            </tr>
          </tfoot>
        </CalendarBillTable>
      </CalendarBillContent>
    </CalendarBillContainer>
  )
}
