<%@ page contentType="image/jpeg"
	import="java.awt.*,java.awt.image.*,java.util.*,javax.imageio.*"%>
<%
			response.addHeader("P3P","CP=CAO PSA OUR");
            response.setHeader("Pragma", "No-cache");
            response.setHeader("Cache-Control", "no-cache");
            response.setDateHeader("Expires", 0);
            
            //set backgroud color
            Color backColor = new Color(90,90,90);
            
            //set font color
            Color fontColor = new Color(200,255,200);
            
            int maxlength = 0;
            int width = 0;
            int height = 20;
            if (request.getParameter("width") != null) {
                maxlength = Integer.parseInt(request.getParameter("width"));
            } else {
                maxlength = 4;
            }
            width = maxlength * 15;
            BufferedImage image = new BufferedImage(width, height,
                    BufferedImage.TYPE_INT_RGB);
            Graphics g = image.getGraphics();
            Random random = new Random();
            g.setColor(backColor);
            g.fillRect(0, 0, width, height);
            g.setFont(new Font("ËÎÌו", Font.PLAIN, 18));
            g.setColor(backColor);
            for (int i = 0; i < 255; i++) {
                int x = random.nextInt(width);
                int y = random.nextInt(height);
                int xl = random.nextInt(12);
                int yl = random.nextInt(12);
                g.drawLine(x, y, x + xl, y + yl);
            }

            String sRand = "";
            for (int i = 0; i < maxlength; i++) {
                String rand = String.valueOf(random.nextInt(10));
                sRand += rand;
                g.setColor(fontColor);   
                g.drawString(rand, 13 * i + 6, 16);
            }
            session.setAttribute(com.sinovatech.common.web.action.ActionConstent.RAND_IMAGE_VALIDATE, sRand);
            g.dispose();
 out.clear();
                        out = pageContext.pushBody();        
    ImageIO.write(image, "JPEG", response.getOutputStream());
        %>
