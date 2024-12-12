import React from 'react';

export const Reserva = () => {

  return (
    <div className="pt-20 relative">
      {/* Imagen de fondo */}
      <img
        className="w-full h-auto opacity-45"
        src="https://www.cmvidasanclemente.cl/wp-content/uploads/2024/03/banner-medicina-general-ficha-1.jpg"
        alt="Articulo"
      />
        <section className="box__reserva">
          <div classNAme="auxi">
            <form class="form__reserva form__reserva--formulario">
              <h2 className="block-head__title text-4xl mt-5 text-cyan-600">Reserva tu hora</h2>
              <div className="form__group flex space-x-4 mt-3">
                <div className="w-1/3">
                  <select name="tipo" id="tipo" className="w-full bg-white px-4 text-black border border-cyan-600 mt-1 mb-0 h-14 rounded">
                    <option value="" selected>Tipo de atención</option>
                    <option value="">Consultas médicas</option>
                    <option value="">Telemedicina</option>
                    <option value="">Toma de Muestra General</option>
                    <option value="">Imágenes</option>
                    <option value="">Procedimientos</option>
                    <option value="">Clínica Dental</option>
                    <option value="">Kinesiología</option>
                    <option value="">Oftalmología</option>
                  </select>
                </div>
                <div class="w-1/3">
                  <select name="select" className="text-black w-full selector border border-cyan-600  bg-white px-4 mt-1 mb-0 h-14 rounded">
                    <option value="">Modalidad de atención</option>
                    <option value="https://agenda.bupa.cl/integramedica/consulta-medica/reserva-consulta-medica?_gl=1*4sehws*_ga*MTkxMTQ5NjAxMi4xNzM0MDI4ODk1*_ga_RLCGHQDD0D*MTczNDAyODg5NS4xLjAuMTczNDAyODg5NS4wLjAuMA..">Presencial</option>
                    <option value="https://agenda.bupa.cl/integramedica/telemedicina/reserva-telemedicina?_gl=1*4sehws*_ga*MTkxMTQ5NjAxMi4xNzM0MDI4ODk1*_ga_RLCGHQDD0D*MTczNDAyODg5NS4xLjAuMTczNDAyODg5NS4wLjAuMA..">Telemedicina</option>
                  </select>
                </div>

                <div className="w-1/3">
                  <div className="btn">
                    <button type="submit" className="ml-52 bg-cyan-600 px-4 text-white mt-1 mb-0 w-44 h-14 rounded" id="buscar">Buscar mi hora</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

  );
};
