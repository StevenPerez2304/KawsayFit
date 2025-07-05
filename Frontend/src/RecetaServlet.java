import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class RecetaServlet extends HttpServlet {
    public void RecetaServlet(HttpServletRequest request, HttpServletResponse response) {
        // Aquí puedes manejar la solicitud y respuesta
        // Por ejemplo, puedes obtener parámetros de la solicitud
        String recetaId = request.getParameter("recetaId");
        
        // Lógica para procesar la receta con el ID proporcionado
        // Puedes acceder a una base de datos o realizar otras operaciones
        
        // Configurar la respuesta
        response.setContentType("text/html");
        try {
            response.getWriter().println("<html><body>");
            response.getWriter().println("<h1>Receta ID: " + recetaId + "</h1>");
            // Aquí puedes agregar más detalles sobre la receta
            response.getWriter().println("</body></html>");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}
