import javax.script.ScriptEngineManager;
import javax.script.ScriptEngine;
import javax.script.ScriptException;

public class Test {
  public static void main(String[] args) throws ScriptException {
    try{
      ScriptEngineManager manager = new ScriptEngineManager();
      ScriptEngine engine = manager.getEngineByName("JavaScript");
      engine.eval("print('Hello World!');");
    } catch (Exception e) {
      e.printStackTrace();
    }
    ScriptEngineManager mgr = new ScriptEngineManager();
    ScriptEngine engine = mgr.getEngineByName("JavaScript");
    String foo = "40+2";
    String bar = engine.eval(foo).toString();
    System.out.println(bar);
    } 
}