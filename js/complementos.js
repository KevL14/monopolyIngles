var tablaDeJuego = `
<table  id="tableGame">
      <tr>
        <td class="corner" id="position0"></td>
        <td class="property" id="position1">1</td>
        <td class="property" id="position2">2</td>
        <td class="property" id="position3">3</td>
        <td class="property" id="position4">4</td>
        <td class="property" id="position5">5</td>
        <td class="property" id="position6">6</td>
        <td class="property" id="position7">7</td>
        <td class="property" id="position8">8</td>
        <td class="property" id="position9">9</td>
        <td class="property" id="position10">10</td>
        <td class="corner" id="position11">11</td>

        <!-- filas verticales -->
      </tr>
      <tr>
          <!-- primero izq y luego der -->
        <td class="property" id="position31">31</td>
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->

        <td class="property" id="position12">12</td>
      </tr>
      <tr>
        <td class="property" id="position30">32</td>

        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios" id="dado" onclick="lanzarDado()"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="property" id="position13">13</td>
      </tr>

      <tr>
        <td class="property" id="position29">29</td>

        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="property" id="position14">14</td>
      </tr>


      <tr>
        <td class="property" id="position28">20</td>

        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="property" id="position15">15</td>
      </tr>
      <!-- ... Resto de las filas de la tabla ... -->
      <tr>
          <td class="corner" id="position27">27</td>
          <td class="property" id="position26">26</td>
          <td class="property" id="position25">25</td>
          <td class="property" id="position24">24</td>
          <td class="property" id="position23">23</td>
          <td class="property" id="position22">22</td>
          <td class="property" id="position21">21</td>
          <td class="property" id="position20">20</td>
          <td class="property" id="position19">19</td>
          <td class="property" id="position18">18</td>
          <td class="property" id="position17">17</td>
          <td class="corner" id="position16">16</td>
    
      </tr>
    </table>`;


    // preguntas