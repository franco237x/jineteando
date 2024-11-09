import React from 'react';
import './HelpMe.css';

const HelpMe = () => {
  return (
    <div className="help-container">
      <h1 className="help-title">Así funciona</h1>
      
      <div className="help-section">
        <h2 className="help-question">¿Cómo puedo alquilar un vehículo?</h2>
        <p className="help-answer">
          Abre la aplicación y verás un mapa de la ciudad con alfileres anaranjados - estos marcan nuestros lugares de recogida. Selecciona el lugar que prefieras y elija el número de vehículos que quieres alquilar de allí. Luego encuentra los vehículos y desbloquéalos a través de la aplicación.
        </p>
      </div>

      <div className="help-section">
        <h2 className="help-question">¿Cómo recojo el vehículo?</h2>
        <p className="help-answer">
          Obtendrás direcciones a tu lugar de recogida. Una vez allí, revisa el codigo QR de información en el manillar y una pegatina con el nombre para encontrar el vehículo con el nombre que coincida con el nombre que puedes ver en la aplicación. Entonces presiona "icono qr"
        </p>
      </div>

      <div className="help-section">
        <h2 className="help-question">¿Y el seguro?</h2>
        <p className="help-answer">
          El seguro antirrobo se puede adquirir para todos los alquileres de "Viaje Simple" durante el proceso de reserva. Si estás suscrito como miembro, el seguro antirrobo se incluye en todos los alquileres sin coste adicional.
        </p>
      </div>

      <div className="help-section">
        <h2 className="help-question">¿Cómo pago?</h2>
        <p className="help-answer">
          Aceptamos Visa, MasterCard, American Express. Si has recibido un código de descuento o deseas añadir un seguro antirrobo a tu alquiler, puedes añadirlo antes de confirmar la reserva. Una vez que confirmes tu reserva, los fondos para 1 día de alquiler serán reservados para asegurar el pago, pero no se te cobrará nada antes de que termines tu alquiler.
        </p>
      </div>

      <div className="help-section">
        <h2 className="help-question">¿Puedo hacer pausas en el camino?</h2>
        <p className="help-answer">
          Durante el periodo de alquiler el vehículo es todo tuya. Puedes desbloquearlo y bloquearlo tantas veces como quieras, sólo asegúrate de aparcarlo bien y de bloquearlo seguramente cuando hagas una pausa.
        </p>
      </div>

      <div className="help-section">
        <h2 className="help-question">¿Cómo devuelvo el vehículo?</h2>
        <p className="help-answer">
          Si ya no necesitas el vehículo, presiona <strong>Devolver</strong>. Obtendrás indicaciones para llegar al lugar de entrega más cercano. Una vez allí, bloquea el vehículo, presiona <strong>Finalizar alquiler</strong> y sigue las instrucciones de la aplicación.
        </p>
      </div>

      <div className="help-section">
        <h2 className="help-question">¿Dónde puedo devolver una bici?</h2>
        <p className="help-answer">
          Nuestro sistema de entrega virtual te ofrece la flexibilidad de recoger una bici en un lugar y devolverla en otro distinto.
        </p>
        <p className="help-answer">
          Ocasionalmente, las ubicaciones de entrega pueden alcanzar su capacidad máxima y dejar de estar disponibles temporalmente. Además, algunos tipos de vehículos tienen lugares designados para devolverlos. Pero no te preocupes, cuando estés listo para finalizar tu alquiler, la aplicación te mostrará las ubicaciones de entrega disponibles que puedes utilizar.
        </p>
        <p className="help-warning">
          Ayuda a mantener la ciudad ordenada. Se te cobrará una multa si no devuelves tu bici a una ubicación de entrega cuando finalice el alquiler.
        </p>
      </div>
    </div>
  );
};

export default HelpMe;
